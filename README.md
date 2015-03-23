# ti-ignore-plugin

Add .ti-ignore file support to the Titanium CLI build process. Place .ti-ignore
files in your project following the ![http://git-scm.com/docs/gitignore](.gitignore) syntax. The matching files will not be copied over into the app
during `ti build`.

## How to install

Check out the module and place it at

```
plugins/ti-ignore-plugin
```

inside of your Titanium project.

Install the required npm packages:

```bash
$ cd plugins/ti-ignore-plugin
$ npm install
```

Add the plugin to your `tiapp.xml`:

```xml
<plugins>
    <plugin version="1.0">ti-ignore-plugin</plugin>
</plugins>
```
