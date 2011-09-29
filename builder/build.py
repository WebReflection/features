# JSBuilder http://code.google.com/p/javascript-builder/

copyright = '(C) Andrea Giammarchi, @WebReflection - Mit Style License'

import JSBuilder

# embedded DOM version for HTML tests
print ("")
print ("-----------------------")
print ("|     features.js     |")
print ("-----------------------")
JSBuilder.compile(
    copyright,
    'build/features.max.js',
    'build/features.js',
    [
        "features.js"
    ]
)
print ("----------------------")
print ("")

# let me read the result ...
import time
time.sleep(2)