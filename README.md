# font-selector
A javascript module that gives developers a module for selecting fonts with preview. Works exactly like an input box that has all font-awesome icons!

## Dependencies
jQuery is this modules only hard dependency. Use the CDN:
```
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
        <script src="build/bzfontselector.min.js"></script>
```

## Usage
```
var gfss = new bzfontselector().init({container:'#bfs', onChange:test});
```

