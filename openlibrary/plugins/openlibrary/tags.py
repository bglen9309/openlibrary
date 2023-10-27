from infogami.utils.view import public
# XXX : Is web needed for this file?  Sometimes it's imported for
# _some_ side effect... what is that side effect?
import web
import json


@public
def load_plugin_json(plugins_str):
    # XXX : Investigate better way to pass data to templates.
    return json.loads(plugins_str)


@public
def display_plugins_data(data):
    # XXX : Verification task in multi-line comment, below
    # XXX : There's got to be a better way...  Thoughts:
    """
    - Plugins are saved on the Tag as a list of dicts.
    - It seems like this function and process_plugins_data may
    not be needed.  Verify this.
    - `join` in this method and complementary `split` in the other method
    use different delimiters (`, ` and `,`, respectively).
    - `split` calls problematic in both methods.
    """
    plugin_type = list(data.keys())[0]
    # Split the string into key-value pairs
    parameters = data[plugin_type].split(',')

    # Create a list to store the formatted parameters
    plugin_fields = []

    # Iterate through the pairs and extract the key-value information
    for pair in parameters:
        try:
            key, value = pair.split('=', 1)
            key = key.strip()
            plugin_fields.append(f'{key}={value}')
        except ValueError:
            plugin_fields.append(pair)

    plugin_data = ', '.join(plugin_fields)

    return plugin_type, plugin_data


@public
def get_tag_types():
    # XXX : What is a work Tag?
    return ["subject", "work", "collection"]


@public
def get_plugin_types():
    return ["RelatedSubjects", "QueryCarousel", "ListCarousel"]


@public
def process_plugins_data(data):
    # XXX : Verification task in multi-line comment, below
    '''
    data is a dict with a single key.
    The key will be the name of one of our macros.
    The value is a dict containing the macro's parameters.

    Issues:
    - For QueryCarsousel (and others, most likely), complex queries
    causing macro rendering to fail.  Suspect this is a parsing issue?
    More investigation needed.
    Update: I think that you mixed up some single and double quotes in the
    `query`.  Verify this.
    '''
    plugin_type = list(data.keys())[0]
    # Split the string into key-value pairs

    # XXX : RelatedSubjects macro take a string of comma-separated values,
    # which makes this means of getting parameters problematic.
    parameters = data[plugin_type].split(',')

    # Create a dictionary to store the formatted parameters
    plugin_data = {}

    # Iterate through the pairs and extract the key-value information
    for pair in parameters:
        key, value = pair.split('=')
        key = key.strip()
        # XXX : Is this safe?  Why is `eval` used here?
        plugin_data[key] = eval(value)

    return plugin_type, plugin_data


def setup():
    pass
