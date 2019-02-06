/*
$index: 0;
@each $name, $hex in $color-map { 
  #box-#{$index}:after {   
    content: ' ' + $name;
    color: $hex;
  }
  $index: $index + 1;
}
*/