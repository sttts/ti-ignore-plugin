# ti-ignore-plugin

Add `.tiignore` file support to the Titanium CLI build process. Place `.tiignore`
files in your project following the [.gitignore](http://git-scm.com/docs/gitignore) syntax. The matching files will not be copied over into the app
during `ti build`.

You can use one of the following filenames:
- `.titaniumignore`,
- `.tiignore`,
- `.ti-ignore`.

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
