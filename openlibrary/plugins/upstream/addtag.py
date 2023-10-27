"""Handlers for adding and editing tags."""

import web
import json

from typing import NoReturn

from infogami.core.db import ValidationException
from infogami.infobase import common
from infogami.utils.view import add_flash_message, public
from infogami.infobase.client import ClientException
from infogami.utils import delegate

# XXX : Not accessed.  Is it needed?  Does it need to be registered?
from openlibrary.plugins.openlibrary.processors import urlsafe
from openlibrary.i18n import gettext as _
import logging

from openlibrary.plugins.upstream import spamcheck, utils
from openlibrary.plugins.upstream.models import Tag
from openlibrary.plugins.upstream.addbook import get_recaptcha, safe_seeother, trim_doc
from openlibrary.plugins.upstream.utils import render_template

logger = logging.getLogger("openlibrary.tag")


@public
def get_tag_types():
    return ["subject", "work", "collection"]


class addtag(delegate.page):
    path = '/tag/add'

    def GET(self):
        """Main user interface for adding a tag to Open Library."""

        if not self.has_permission():
            # XXX : Is this the right exception?  It's new to me...
            raise common.PermissionDenied(message='Permission denied to add tags')

        return render_template('tag/add', recaptcha=get_recaptcha())

    # XXX : Necessary?  Maybe if reused...  That decorator works here as well.
    def has_permission(self) -> bool:
        """
        Can a tag be added?
        """

        user = web.ctx.site.get_user()
        # XXX : Admins?
        return user and (user.is_usergroup_member('/usergroup/super-librarians'))

    def POST(self):
        i = web.input(
            tag_name="",
            tag_type="",
            tag_description="",
            tag_plugins="",
        )

        # XXX : Is this needed?  Also, `i` doesn't need to be passed in.
        if spamcheck.is_spam(i, allow_privileged_edits=True):
            return render_template(
                "message.html", "Oops", 'Something went wrong. Please try again later.'
            )

        # XXX : We're allowing anybody to create tags?
        # Can't access the creation UI while unauthenticated, but this shouldn't be here.
        # Attack vector.
        if not web.ctx.site.get_user():
            recap = get_recaptcha()
            if recap and not recap.validate():
                return render_template(
                    'message.html',
                    'Recaptcha solution was incorrect',
                    'Please <a href="javascript:history.back()">go back</a> and try again.',
                )

        # XXX : What is this doing?  Why is this needed?
        i = utils.unflatten(i)
        match = self.find_match(i)

        tag = Tag.find(i.tag_name, i.tag_type)
        if tag:
            key = tag.key
        else:
            # XXX : Save tag_plugins as a list of dicts
            key = Tag.create(i.tag_name, i.tag_description, i.tag_type, i.tag_plugins)

        raise safe_seeother(key)


# XXX : What existing definition of addtag?
# remove existing definitions of addtag
# delegate.pages.pop('/addtag', None)


# XXX : Why is this here?
# Note : path defaults to `/{classname}`
class addtag(delegate.page):  # type: ignore[no-redef] # noqa: F811
    def GET(self):
        raise web.redirect("/tag/add")


# XXX : Does `addbook.py` have an edit handler?
class tag_edit(delegate.page):
    path = r"(/tags/OL\d+T)/edit"

    def GET(self, key):
        if not web.ctx.site.can_write(key):
            return render_template(
                "permission_denied",
                web.ctx.fullpath,
                "Permission denied to edit " + key + ".",
            )

        tag = web.ctx.site.get(key)
        if tag is None:
            raise web.notfound()

        return render_template('type/tag/edit', tag)

    def POST(self, key):
        tag = web.ctx.site.get(key)
        if tag is None:
            raise web.notfound()

        # XXX : Is _comment being POSTed today?
        i = web.input(_comment=None)
        formdata = self.process_input(i)
        try:
            if not formdata:
                raise web.badrequest()
            elif "_delete" in i:
                # XXX : Is this how deletes are done elsewhere?  How does the
                # TypeChanger do this?
                tag = web.ctx.site.new(
                    key, {"key": key, "type": {"key": "/type/delete"}}
                )
                # XXX : _save seems like the wrong thing to use here.  Is this
                # done with other models?
                tag._save(comment=i._comment)
                raise safe_seeother(key)
            else:
                # XXX : `update` doesn't save the record?
                tag.update(formdata)
                # XXX : _save !!!
                tag._save(comment=i._comment)
                raise safe_seeother(key)
        except (ClientException, ValidationException) as e:
            add_flash_message('error', str(e))
            return render_template("type/tag/edit", tag)

    def process_input(self, i):
        # XXX : Make sure that any extra data in i is not being saved on update
        # XXX : Prep for future state, when ready:
        '''
        Plugins will need to be adapted to a list of dicts
        '''
        # XXX : Nearly certain that unflatten is not needed
        i = utils.unflatten(i)
        tag = trim_doc(i)
        return tag


def setup():
    """Do required setup."""
    pass
