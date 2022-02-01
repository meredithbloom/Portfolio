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
*All of my pages have unique html, css, and js files.*


///----------///  POINTS OF JQUERY INTERACTION  ///----------///
- Dropdown main menu
- Contact me modal
- Dropdown lists on resume and homepage (icon credit footers)
- 3 image carousels on project page
- 4 *nested* image carousels on Bio page - user can loop through options of categories that will then display totally unique image carousels



///----------///  TECHNICAL DETAILS ///----------///

Flex box is awesome.

I used jquery primarily to hide/show relevant elements on the page, rather than appending totally new elements to the page.


///----------///  CHALLENGES - SOLVED  ///----------///

It took me a really long time to figure out how to make the custom fonts I downloaded show up on browsers that *weren't* mine. Scoured my notes and Google and remembered that I needed to declare the css font-face(s) with paths to the font files in my git repository before they'd work beyond just my computer.

I was initially having a ton of trouble getting Netlify to recognize my html and correctly deploy my site. After a lot of frustration, I learned that Netlify only recognizes homepage html docs if the file is named index.html, or something similar. My homepage html file was initially named homepagehtml.html or something like that, so I just changed the name and all was well.

I began with wireframes for mobile, tablet, and desktop versions of my pages, but
quickly discovered that I needed to write an additional media query for the weird in-between laptop viewport sizes.


///----------///  CHALLENGES - UNSOLVED  ///----------///

For some reason on Saturday night my resume and project html files stopped recognizing the media query script, which broke my code. I couldn't figure out what the issue was for the life of me, as the code was identical to an earlier version that HAD been working. Eventually (and fortunately), the issue mysteriously disappeared. So though the mystery remains unsolved, it is decidedly less urgent.

I'm not sure if anyone else had this problem, but what I saw on Chrome Dev tools as ipad/mobile previews didn't actually align with what I saw on my phone and ipad. I even customized the pixel size on Chrome since I have the gigantic new iphone, and it still didn't work 100%. Though the discrepancies were relatively minor (some cramped spacing on my resume page, image carousel buttons way too close to images), this was definitely frustrating. And I use Chrome on my phone, so I don't think browser compatibility is the issue. I still have some anxiety about my site being *actually* fully responsive, given Chrome Dev Tools wasn't accurate about a few noticeable things.

I'm still a little shaky on how to make height of an element responsive. I had particular trouble with the projects page, and keeping the project sections even. The middle project image carousel has an image that is taller, and it keeps expanding the size of the section, though only at certain viewport sizes.


///----------/// IMPROVEMENTS ///----------///

I wanted to add some more text on the Bio page, ideally connected to the image carousels (the text below the images would change as the user moved between images). In the interest of time, I focused on the core functionality. I think I'd try to go about this in the same way I looped through the category options and image carousels simultaneously - by aligning related info across different arrays, and just assigning them the same index, so whenever the index changed, everything changed with it. I think I could probably use objects to pull the info from one array. I initially tried this, but was having trouble assigning the key-values to html elements.

I'd like to have included some more interesting animations. I stuck with pretty simple transform: scale(). The only other "transform" css I used flipped the writing icon on my homepage because I'm left-handed, lol, and I couldn't find a left-handed writing icon.

I tried to get more adventurous with my color schemes on my bio and projects page, but I still think my site overall is kind of plain, though at least the aesthetic is consistent (I guess?).

My css definitely isn't dry. I duplicated a lot of code in my media queries that didn't need to be - sizing/position is one thing, but color schemes remained the same across all viewport sizes, and were repeated all the same.

Over all, I'd like to have more content on my site. I had a lot of ideas (page for collaborators, blog, etc.) that I had to table to focus my energy effectively. I also would really love to include an in-browser game or quiz. I used to do a lot of surveys on my instagram, and found that to be super entertaining and interesting. I once asked my followers if they liked cilantro or if they had the recessive gene that makes cilantro taste like soap (like me) - supposedly 1 in 3 people have the recessive gene. I got over 100 respondents, and I swear it was a perfect 33%/66% split. It would be cool to gather survey responses from unique page visitors, and print out the live results whenever a user answered the question.

Really want to figure out how to make the image carousels "swipeable" on mobile. I tried to use the "swiperight"/"swipeleft" event listener, but was unsuccessful. Pretty sure I'd need to add some kind of animation.

Small thing, but I really wanted to find a way to mouseover the icons on my homepage and have an icon label appear so the user would actually know that the first icon takes you to my resume, and the second one to my projects page.

I only wrote code for Google chrome - didn't add any mozilla/webkit code.
