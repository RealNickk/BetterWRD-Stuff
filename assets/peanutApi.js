// Internal API for my BetterWRD plugins.
// This is not a plugin, it is a library for plugins.
// You can use this library, I really don't care.

// Ensure that JQuery is loaded.
if (typeof(window.jQuery) == "undefined")
    bwrd.includeLibrary("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js");

const peanut = {
    // Injects an inline frame into the page. I abuse this to use my own service worker. If John adds a same-origin policy, anything using this will be screwed.
    // So John, if you're reading this, please don't add a same-origin policy. I'm begging you. I'll do anything. I'll even give you a cookie.
    injectFrame: (src) => {
        const frame = document.createElement("iframe");
        frame.src = src;
        frame.style = "display: none;";
        document.body.appendChild(frame);
    }
};

/*
    Copyright 2022-2023 Nicholas "RealNickk" H.

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in the
    Software without restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
    Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
    AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
