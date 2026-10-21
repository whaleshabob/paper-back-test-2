(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atsumaru = exports.AtsumaruInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const BASE_URL = 'https://atsu.moe';
const CDN_URL = 'https://cdn.atsu.moe';
const CDN_STATIC = `${CDN_URL}/static/`;
// Poster thumbnails are served as AVIF (small) alongside the original JPG/PNG.
// AVIF decoding needs iOS 16+. Set to false to use the (much larger) originals.
const PREFER_AVIF = true;
const SEARCH_PAGE_SIZE = 24;
const HOME_PAGE_SIZE = 24;
// Comics only (novels can't be read in Paperback). The site splits listings into
// a regular feed and an adult feed (adult=1), so the home page shows both.
const HOME_TYPES = 'types=Manga%2CManwha%2CManhua%2COEL%2COther&mediums=Comic';
const HOME_FILTERS_REGULAR = `${HOME_TYPES}&contentRatings=Safe%2CSuggestive%2CErotica`;
const HOME_FILTERS_ADULT = `${HOME_TYPES}&contentRatings=Safe%2CSuggestive%2CErotica%2CPornographic&adult=1`;
exports.AtsumaruInfo = {
    version: '1.0.0',
    name: 'Atsumaru',
    icon: 'icon.png',
    author: 'whaleshabob',
    authorWebsite: 'https://github.com/whaleshabob',
    description: 'Extension that pulls manga, manhwa and manhua from atsu.moe (Atsumaru).',
    contentRating: paperback_extensions_common_1.ContentRating.ADULT,
    websiteBaseURL: BASE_URL,
    sourceTags: [],
};
const HOME_SECTIONS = [
    { id: 'hotUpdates', title: 'Hot Updates', path: 'hotUpdates', extra: '', type: paperback_extensions_common_1.HomeSectionType.singleRowLarge, adult: false },
    { id: 'recentlyUpdated', title: 'Recently Updated', path: 'recentlyUpdated', extra: '', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: false },
    { id: 'popular', title: 'Popular This Week', path: 'popular', extra: '&timeframe=weekly', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: false },
    { id: 'rising', title: 'Rising', path: 'rising', extra: '', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: false },
    { id: 'topRated', title: 'Top Rated', path: 'topRated', extra: '&timeframe=all', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: false },
    { id: 'recentlyAdded', title: 'Recently Added', path: 'recentlyAdded', extra: '&timeframe=all', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: false },
    { id: 'adultRecentlyUpdated', title: 'Recently Updated (Adult)', path: 'recentlyUpdated', extra: '', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: true },
    { id: 'adultPopular', title: 'Popular This Week (Adult)', path: 'popular', extra: '&timeframe=weekly', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: true },
    { id: 'adultTopRated', title: 'Top Rated (Adult)', path: 'topRated', extra: '&timeframe=all', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: true },
    { id: 'adultRecentlyAdded', title: 'Recently Added (Adult)', path: 'recentlyAdded', extra: '&timeframe=all', type: paperback_extensions_common_1.HomeSectionType.singleRowNormal, adult: true },
];
// ---------------------------------------------------------------------------
// Source
// ---------------------------------------------------------------------------
class Atsumaru extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.requestManager = createRequestManager({
            requestsPerSecond: 4,
            requestTimeout: 20000,
            interceptor: {
                interceptRequest: async (request) => {
                    var _a;
                    request.headers = Object.assign(Object.assign({}, ((_a = request.headers) !== null && _a !== void 0 ? _a : {})), { referer: `${BASE_URL}/`, origin: BASE_URL, accept: request.url.includes('/api/') || request.url.includes('/collections/')
                            ? 'application/json'
                            : 'image/webp,image/avif,image/*,*/*;q=0.8' });
                    return request;
                },
                interceptResponse: async (response) => response,
            },
        });
    }
    // -------------------------------------------------------------------------
    // Helpers
    // -------------------------------------------------------------------------
    async getJSON(url) {
        const request = createRequestObject({ url, method: 'GET' });
        const response = await this.requestManager.schedule(request, 2);
        if (response.status >= 400) {
            throw new Error(`Atsumaru returned HTTP ${response.status} for ${url}`);
        }
        const body = response.data;
        return (typeof body === 'string' ? JSON.parse(body) : body);
    }
    /** Home API paths look like "posters/abc-medium.avif" (no leading slash, no /static). */
    homeImage(item) {
        var _a;
        const path = PREFER_AVIF ? ((_a = item.mediumImage) !== null && _a !== void 0 ? _a : item.image) : item.image;
        return `${CDN_STATIC}${path.replace(/^\/+/, '')}`;
    }
    /** Search API paths already include "/static/...". */
    searchImage(doc) {
        var _a;
        const path = PREFER_AVIF ? ((_a = doc.posterMedium) !== null && _a !== void 0 ? _a : doc.poster) : doc.poster;
        if (!path)
            return `${BASE_URL}/images/banner.png`;
        return `${CDN_URL}${path.startsWith('/') ? '' : '/'}${path}`;
    }
    makeTile(id, title, image, rating, views) {
        return createMangaTile({
            id,
            image,
            title: createIconText({ text: title }),
            subtitleText: views ? createIconText({ text: views, icon: 'eye.fill' }) : undefined,
            primaryText: rating ? createIconText({ text: rating.toFixed(1), icon: 'star.fill' }) : undefined,
        });
    }
    homeUrl(section, offset) {
        return (`${BASE_URL}/api/home2/${section.path}` +
            `?offset=${offset}&limit=${HOME_PAGE_SIZE}${section.extra}&` +
            (section.adult ? HOME_FILTERS_ADULT : HOME_FILTERS_REGULAR));
    }
    parseStatus(status) {
        switch ((status !== null && status !== void 0 ? status : '').toLowerCase()) {
            case 'ongoing':
                return paperback_extensions_common_1.MangaStatus.ONGOING;
            case 'completed':
                return paperback_extensions_common_1.MangaStatus.COMPLETED;
            case 'hiatus':
                return paperback_extensions_common_1.MangaStatus.HIATUS;
            case 'canceled':
            case 'cancelled':
                return paperback_extensions_common_1.MangaStatus.ABANDONED;
            default:
                return paperback_extensions_common_1.MangaStatus.UNKNOWN;
        }
    }
    // -------------------------------------------------------------------------
    // Manga details
    // -------------------------------------------------------------------------
    async getMangaDetails(mangaId) {
        var _a, _b, _c, _d, _e, _f;
        const { mangaPage: m } = await this.getJSON(`${BASE_URL}/api/manga/page?id=${encodeURIComponent(mangaId)}`);
        const titles = [m.title];
        for (const alt of [m.englishTitle, ...((_a = m.otherNames) !== null && _a !== void 0 ? _a : [])]) {
            if (alt && !titles.includes(alt))
                titles.push(alt);
        }
        const names = (type) => {
            var _a;
            return ((_a = m.authors) !== null && _a !== void 0 ? _a : [])
                .filter((a) => a.type === type)
                .map((a) => a.name)
                .join(', ');
        };
        const tagSections = [];
        if ((_b = m.genres) === null || _b === void 0 ? void 0 : _b.length) {
            tagSections.push(createTagSection({
                id: 'genres',
                label: 'Genres',
                tags: m.genres.map((g) => createTag({ id: `genre:${g.id}`, label: g.name })),
            }));
        }
        const posterPath = m.poster
            ? (PREFER_AVIF ? ((_c = m.poster.largeImage) !== null && _c !== void 0 ? _c : m.poster.image) : m.poster.image)
            : '';
        return createManga({
            id: mangaId,
            titles,
            image: posterPath ? `${CDN_STATIC}${posterPath.replace(/^\/+/, '')}` : `${BASE_URL}/images/banner.png`,
            rating: (_d = m.avgRating) !== null && _d !== void 0 ? _d : undefined,
            status: this.parseStatus(m.status),
            author: names('Author') || undefined,
            artist: names('Artist') || undefined,
            desc: (_e = m.synopsis) !== null && _e !== void 0 ? _e : undefined,
            tags: tagSections,
            hentai: (_f = m.isAdult) !== null && _f !== void 0 ? _f : false,
        });
    }
    // -------------------------------------------------------------------------
    // Chapters
    // -------------------------------------------------------------------------
    async getChapters(mangaId) {
        var _a;
        const id = encodeURIComponent(mangaId);
        // The series page lists scanlation groups; allChapters lists every chapter
        // from every group, tagged with the group's id.
        const [page, all] = await Promise.all([
            this.getJSON(`${BASE_URL}/api/manga/page?id=${id}`),
            this.getJSON(`${BASE_URL}/api/manga/allChapters?mangaId=${id}`),
        ]);
        const groups = {};
        for (const s of (_a = page.mangaPage.scanlators) !== null && _a !== void 0 ? _a : [])
            groups[s.id] = s.name;
        return all.chapters.map((c) => createChapter({
            id: c.id,
            mangaId,
            chapNum: c.number,
            langCode: paperback_extensions_common_1.LanguageCode.ENGLISH,
            name: c.title,
            group: groups[c.scanlationMangaId],
            time: new Date(c.createdAt),
        }));
    }
    async getChapterDetails(mangaId, chapterId) {
        const { readChapter } = await this.getJSON(`${BASE_URL}/api/read/chapter?mangaId=${encodeURIComponent(mangaId)}` +
            `&chapterId=${encodeURIComponent(chapterId)}`);
        const ordered = [...readChapter.pages].sort((a, b) => a.number - b.number);
        const pages = ordered.map((p) => `${CDN_URL}${p.image.startsWith('/') ? '' : '/'}${p.image}`);
        // Webtoon-style chapters are a few extremely tall images; flag them as long strips.
        const tall = ordered.filter((p) => { var _a; return ((_a = p.aspectRatio) !== null && _a !== void 0 ? _a : 1) < 0.4; }).length;
        const longStrip = ordered.length > 0 && tall > ordered.length / 2;
        return createChapterDetails({ id: chapterId, mangaId, pages, longStrip });
    }
    // -------------------------------------------------------------------------
    // Search
    // -------------------------------------------------------------------------
    async getSearchTags() {
        const filters = await this.getJSON(`${BASE_URL}/api/explore/availableFilters`);
        const section = (id, label, prefix, items) => createTagSection({
            id,
            label,
            tags: items.map((i) => createTag({ id: `${prefix}:${i.id}`, label: i.name })),
        });
        return [
            section('genres', 'Genres', 'genre', filters.genres),
            section('types', 'Type', 'type', filters.types),
            section('statuses', 'Status', 'status', filters.statuses),
        ];
    }
    async supportsTagExclusion() {
        return true;
    }
    buildFilter(query) {
        var _a, _b;
        // Comics only; no content-rating filtering, so adult series show up too.
        const clauses = ['medium:=Comic', 'hidden:=false'];
        const types = [];
        const statuses = [];
        for (const tag of (_a = query.includedTags) !== null && _a !== void 0 ? _a : []) {
            const [kind, value] = tag.id.split(':');
            if (kind === 'genre')
                clauses.push(`genreIds:=${value}`);
            else if (kind === 'type')
                types.push(value);
            else if (kind === 'status')
                statuses.push(value);
        }
        for (const tag of (_b = query.excludedTags) !== null && _b !== void 0 ? _b : []) {
            const [kind, value] = tag.id.split(':');
            if (kind === 'genre')
                clauses.push(`genreIds:!=${value}`);
            else if (kind === 'type')
                clauses.push(`type:!=${value}`);
            else if (kind === 'status')
                clauses.push(`status:!=${value}`);
        }
        if (types.length)
            clauses.push(`type:=[${types.join(',')}]`);
        if (statuses.length)
            clauses.push(`status:=[${statuses.join(',')}]`);
        return clauses.join(' && ');
    }
    async getSearchResults(query, metadata) {
        var _a, _b, _c;
        const page = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.page) !== null && _a !== void 0 ? _a : 1;
        const text = ((_b = query.title) !== null && _b !== void 0 ? _b : '').trim();
        let url = `${BASE_URL}/collections/manga/documents/search` +
            `?q=${encodeURIComponent(text || '*')}` +
            `&query_by=${encodeURIComponent('title,otherNames')}` +
            `&filter_by=${encodeURIComponent(this.buildFilter(query))}` +
            `&per_page=${SEARCH_PAGE_SIZE}&page=${page}`;
        // With a text query, keep the engine's relevance ordering; otherwise show popular first.
        if (!text)
            url += `&sort_by=${encodeURIComponent('views:desc')}`;
        const result = await this.getJSON(url);
        const tiles = ((_c = result.hits) !== null && _c !== void 0 ? _c : []).map(({ document: d }) => this.makeTile(d.id, d.title, this.searchImage(d), d.mbRating, d.views));
        const hasMore = page * SEARCH_PAGE_SIZE < result.found;
        return createPagedResults({ results: tiles, metadata: hasMore ? { page: page + 1 } : undefined });
    }
    // -------------------------------------------------------------------------
    // Home page
    // -------------------------------------------------------------------------
    async getHomePageSections(sectionCallback) {
        // Send empty sections first so the app can render placeholders immediately.
        const sections = HOME_SECTIONS.map((def) => createHomeSection({ id: def.id, title: def.title, type: def.type, view_more: true }));
        sections.forEach((s) => sectionCallback(s));
        await Promise.all(HOME_SECTIONS.map(async (def, index) => {
            try {
                const data = await this.getJSON(this.homeUrl(def, 0));
                sections[index].items = data.items.map((i) => this.makeTile(i.id, i.title, this.homeImage(i), i.mbRating, i.views));
            }
            catch (e) {
                // A single failing section should not blank the whole home page.
                sections[index].items = [];
            }
            sectionCallback(sections[index]);
        }));
    }
    async getViewMoreItems(homepageSectionId, metadata) {
        var _a;
        const def = HOME_SECTIONS.find((s) => s.id === homepageSectionId);
        if (!def)
            throw new Error(`Unknown home section: ${homepageSectionId}`);
        const offset = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.offset) !== null && _a !== void 0 ? _a : 0;
        const data = await this.getJSON(this.homeUrl(def, offset));
        const tiles = data.items.map((i) => this.makeTile(i.id, i.title, this.homeImage(i), i.mbRating, i.views));
        const hasMore = data.items.length >= HOME_PAGE_SIZE;
        return createPagedResults({
            results: tiles,
            metadata: hasMore ? { offset: offset + HOME_PAGE_SIZE } : undefined,
        });
    }
    getMangaShareUrl(mangaId) {
        return `${BASE_URL}/manga/${mangaId}`;
    }
}
exports.Atsumaru = Atsumaru;

},{"paperback-extensions-common":4}]},{},[48])(48)
});
