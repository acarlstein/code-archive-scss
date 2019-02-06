/*

$color-map: ( 
    red: #FF0000, 
    blue: #00FF00, 
    green: #0000FF, 
    white: white, 
    black: #000000
);

@mixin map-colors-to-boxes($color-map: $color-map) {
    @each $name, $hex in $color-map {
        #box-#{index(map-keys($color-map), $name) - 1}:after {
            content: $name;
            color: $hex;
        }
    }
}
s
*/
