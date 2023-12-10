import importlib.util


def include_external_python_script(path):
    # Including external file
    spec = importlib.util.spec_from_file_location("mod", path)
    file = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(file)
    return file
