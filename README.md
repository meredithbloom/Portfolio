# Portfolio
Portfolio site showcasing my bio, resume, and projects

www.meredith-bloom.com

FEATURING... my fully responsive:
 - Homepage,
    including a sticky dropdown menu,
    a modal with my contact info,
    social media links,
    css hover animations,
    and a dropdown menu in the footer with icon credits.

 - Bio page,
    which features *nested* image carousels!
    The user can loop through different carousel categories (Me, Family, Friends, Values), each of which has its own totally unique image carousel.

 - Resume page,
    which features several dropdown menus and css hover animations,
    and a dropdown menu in the footer with icon credits.

 - Projects page,
    which features three image carousels dedicated to their own project.

 - A few skeleton pages that we can ignore :)

*All of my pages include the sticky dropdown menu at the top of the page, which itself includes the "contact me" modal.*
*All of my pages have unique html, css, and js files*


~POINTS OF JQUERY INTERACTION~
- Dropdown main menu
- Contact me modal
- Dropdown lists on resume and homepage (icon credit footers)
- 3 image carousels on project page
- 4 *nested* image carousels on Bio page - user can loop through options of categories that will then display totally unique image carousels



///----------///  CHALLENGES - SOLVED  ///----------///

It took me a really long time to figure out how to make the custom fonts I downloaded show up on browsers that *weren't* mine. Scoured my notes and Google and remembered that I needed to declare the css font-face(s) with paths to the font files in my git repository before they'd work beyond just my computer.

I was initially having a ton of trouble getting Netlify to recognize my html and correctly deploy my site. After a lot of frustration, I learned that Netlify only recognizes homepage html docs if the file is named index.html, or something similar. My homepage html file was initially named homepagehtml.html or something like that, so I just changed the name and all was well.

I began with wireframes for mobile, tablet, and desktop versions of my pages, but
quickly discovered that I needed to write an additional media query for the weird in-between laptop viewport sizes.


///----------///  CHALLENGES - UNSOLVED  ///----------///

For some reason on Saturday night my resume and project html files stopped recognizing the media query script, which broke my code. I couldn't figure out what the issue was for the life of me, as the code was identical to an earlier version that HAD been working. Eventually, the issue mysteriously disappeared. So this mystery remains unsolved, though is decidedly less urgent.

I'm not sure if anyone else had this problem, but what I saw on Chrome Dev tools as ipad/mobile previews didn't actually align with what I saw on my phone and ipad. I even customized the pixel size on Chrome since I have the gigantic new iphone, and it still didn't work 100%. Though the discrepancies were relatively minor (some cramped spacing on my resume page, image carousel buttons way too close to images), this was definitely frustrating. And I use Chrome on my phone, so I don't think browser compatibility is the issue.
