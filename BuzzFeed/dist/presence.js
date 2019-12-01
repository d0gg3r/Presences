var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const presence = new Presence({
    clientId: "650492842615242765"
}),
    pages = {
    "/trending": "Trending Page",
    "/lol": "Lol Page",
    "/win": "Win Page",
    "/quizzes": "Quiz Page",
    "/giftguide": "Gift Guide page",
    "/shopping": "Shopping Page",
    "/tvandmovies": "Tv & Movies Page",
    "/celebrity": "Celebrity Page",
    "/newsletters": "Newsletter Page"
};




presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    const page = document.location.pathname,
       
        

        title = document.querySelector("body > div.wt-container > div.global-container.container > div.content > div.news.content-detail-page > article > div.content-title > h1"), 
        posttitle = document.querySelector("#mod-buzz-header-1 > div.buzz-header__hgroup.xs-my2.md-mt0 > h1"), 
        user = document.querySelector("body > main > div > div > div > div.user-info.xs-px2.sm-p0.xs-mb3.md-mb4 > div > div.xs-ml2.xs-flex.xs-flex-column > div > h1"),
        author = document.querySelector('#mod-buzz-header-1 > div.buzz-byline.xs-mb2 > a > div > div.sm-flex.sm-flex-align-center > span'),
        userdesc = document.querySelectorAll('.user-info__bio');



    let data = {
        largeImageKey: "logo",
        startTimestamp: Math.floor(Date.now() / 1000)
    };

    if (posttitle && posttitle.textContent != "") {
        data.details = "Reads a Post:"
        data.state = `${posttitle.textContent.trim()}`;
    } else if (pages[page] || pages[page.slice(0, -1)]) {
        data.details = "Shows to a Page:"
        data.state = pages[page] || pages[page.slice(0, -1)];
    } else if (page.includes("/search")) {
        data.details = "Searching:"
        data.state = document.title;
        data.smallImageKey = "logo";
    } else if (user && user.textContent != "") {
        data.details = "Shows to User Profile:"
        data.state = user.textContent.trim()
    } else {
        data.details = "Shows to a Page:"
        data.state = "Homepage"
    }

    if (data.details && data.state && data.details != "" && data.state != "") presence.setActivity(data);
}));

