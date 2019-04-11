declare type Country = {
  // DEPRECATED: lives in site-config
  // baseUrl: string
  // DEPRECATED: lives in site-config
  // defaultLocale: string
  // DEPRECATED: lives in site-config
  // currency?: string
  tld: string,
  allowRobots?: boolean,
  protocol?: string,
  socialNetworkAccounts?: SocialAccounts,
  gtm: GoogleTagManager,
  appcast?: Appcast,
  features: Features,
  cmsEnv?: string,
  radiusSearch?: {
    numbers?: Array<number>
  },
};

declare type AdsenseSearch = {
  active?: boolean,
  pubId: string,
  language: "de" | "en" | "nl" | "fr",
  adsafe: "high" | "medium" | "low",
  adtest: "on" | "off",
  location?: boolean,
  sellerRatings?: boolean,
  siteLinks?: boolean,
  belowResult?: "never" | "always" | "alwaysExceptPageOne",
};

declare type GoogleTagManager = {
  containerId: string,
  url: string,
  iframeUrl: string,
};

declare type Appcast = {
  eventUrls?: {
    clickout?: string,
    expired?: string,
    signup?: string,
  }
};

declare type Feature = {
  active?: boolean
};

declare type SocialAccounts = Array<{
  network: "facebook" | "twitter" | "instagram" | "googleplus" | "xing" | "linkedIn" | "pinterest",
  link: string,
}>;

declare type JobHoverTabs = "description" | "duties" | "location" | "similarJobs";

declare type FilterCategories = "function" | "seniority" | "sectorLevel1" | "sectorLevel2" | "sectorLevel3" | "sectorLevel4" | "sectorLevel5" | "employmentTypes" | "workingTimes" | "industries" | "companyType" | "companies" | "regionIndependent";

declare type AffiliateManager = {
  name: string,
  image?: string,
  position: string,
  phone?: string,
  mail: string,
};

declare type AffiliatePartner = {
  name: string,
  link: string,
};

declare type Features = {
  // DEPRECATED: Failed in AB test, design removed
  // simpleJobAlertDesign?: Feature
  // DEPRECATED: now part of similar Jobs feature toggle
  // similarJobsLandingPage?: {
  //   active?: boolean,
  //   similarJobsAmount?: number,
  // }
  // DEPRECATED: activated after ab-test
  // simpleLandingPage?: Feature
  // DEPRECATED: integrated as default behavior (Desktop reduced, mobile normal clickout)
  // reducedClickoutArea?: Feature
  // DEPRECATED: iFrameNavigator did not succeed, therefore removed
  // iFrameNavigator?: {
  //   devices?: Array<("phone" | "tablet" | "desktop")>,
  //   titleAndLocationRequired?: boolean,
  //   active?: boolean,
  //   blockSources?: Array<string>,
  //   blockProvider?: Array<string>,
  // }
  // DEPRECATED: Roboto removed
  // useAlternativeFont?: Feature
  // DEPRECATED: light design failed in ab tests
  // lightDesign?: {
  //   active?: boolean
  // }
  // DEPRECATED: ab test showed no positive impact of different item sizes
  // jobItemSize?: {
  //   variant?: "default" | "compact" | "xtraCompact",
  //   removeMarginBottom?: boolean,
  //   active?: boolean,
  // }
  // DEPRECATED: header-one-row default after AB test
  // showDesktopFilter?: {
  //   position?: "below-header" | "header-one-row",
  //   active?: boolean,
  // }
  // DEPRECATED: no longer supported
  // breadcrumbs?: Feature
  // DEPRECATED: this flag is no longer used
  // experimentalElasticsearch5?: Feature
  // DEPRECATED: default design now - deleteMe
  // flatJobItem?: Feature
  // DEPRECATED: decided not to integrate swipe gestures
  // swipeTest?: Feature
  recaptchaV3?: Feature,
  typeform?: {
    active: boolean,
    iframeUrl: string,
  },
  googleOneTap?: {
    // DEPRECATED: always enabled
    // jobalertDisableDelayedOptin?: boolean
    active?: boolean,
    clientId?: string,
    facebookClientId?: string,
    platforms?: Array<("google" | "facebook")>,
    jobalert?: boolean,
    ownDisclaimer?: boolean,
    jobalertShowModalConfirmation?: boolean,
  },
  allowBingAdsRobot?: Feature,
  trackOnResultpage?: Feature,
  partner?: Feature,
  enterSubmitsExpertSearchOnly?: Feature,
  seoContent?: Feature,
  resetfilter?: Feature,
  jobalert?: {
    active?: boolean,
    expandInlineFormInitially?: boolean,
    inlineJobalertIndexLarge?: number,
    inlineJobalertIndexSmall?: number,
    variant?: "blue" | "white",
    hideModalConfirmation?: boolean,
  },
  optinmonster?: {
    active?: boolean,
    variant?: "envelope" | "flat",
    triggerDelayInSeconds?: number,
  },
  footerSeoLinks?: Feature,
  press?: Feature,
  companyFilter?: Feature,
  analyses?: Feature,
  adSense?: {
    // DEPRECATED: is now placed in google tag manager
    // desktopID?: string
    // DEPRECATED: is now placed in google tag manager
    // mobileID?: string
    active?: boolean
  },
  customAdsenseSearch?: AdsenseSearch,
  charts?: Feature,
  popunder?: {
    // DEPRECATED: design property added due to higher amount of designs
    // newDesign?: boolean
    // DEPRECATED: use content attribute for jobalert config
    // allowJobAlertInJPopunder?: boolean
    active?: boolean,
    openPopUnderViaTitle?: boolean,
    openPopUnderViaLocation?: boolean,
    content?: "jobAlert" | "partnerJobs" | "partnerRegister",
    jobsWithProviderLogo?: boolean,
    cookieExpiryInDays?: number,
    design?: "old" | "dark" | "white",
    numberOfJobs?: number,
  },
  jobSearchSuggestion?: {
    active?: boolean,
    locationAware?: boolean,
    showNumJobs?: boolean,
  },
  jobLocationSuggestion?: Feature,
  getCurrentLocation?: {
    active?: boolean,
    permissionButton?: boolean,
  },
  searchRadius?: Feature,
  emptyInputTooltip?: {
    active?: boolean,
    hideForMobileAndTablet?: Array<("homepage" | "location_search")>,
    hideForDesktop?: Array<("homepage" | "location_search")>,
    supressSearchWithoutLocation?: boolean,
  },
  recentDivider?: Feature,
  regionIndependentFilter?: Feature,
  showTimeCreated?: Feature,
  limitTimeCreated?: {
    active?: boolean,
    threshold?: number,
    message?: string,
  },
  newTag?: {
    threshold?: number,
    active?: boolean,
  },
  login?: {
    socialProvider: Array<("LinkedIn" | "Facebook" | "Google")>,
    localLogin?: boolean,
    passwordlessLogin?: boolean,
    active?: boolean,
    directLoginLink?: boolean,
    resetPassword?: boolean,
    jobseekerRegistration?: boolean,
  },
  directApply?: {
    active?: boolean,
    requiresLogin?: boolean,
  },
  jobDetails?: Feature,
  showPartner?: {
    partners: Array<string>,
    active?: boolean,
  },
  showCompany?: {
    providerBlacklist?: Array<string>,
    active?: boolean,
  },
  removeJobItemProvider?: Feature,
  salary?: {
    active?: boolean,
    showPeriod?: boolean,
    restrictToApprenticeships?: boolean,
  },
  accountJobalerts?: Feature,
  seoIndexing?: Feature,
  salaryComparisonPage?: Feature,
  seoTags?: {
    // DEPRECATED: is now part of category configuration
    // categoryOrdering?: Array<string>
    // DEPRECATED: is now part of category configuration
    // tagsPerCategory?: number
    // DEPRECATED: is now part of category configuration
    // tags?: Array<string>
    categories?: Array<{
      name?: string,
      blacklistedTags?: Array<string>,
      maxTags?: number,
    }>,
    maxTags?: number,
    active?: boolean,
  },
  rememberJobs?: Feature,
  rememberAnimation?: Feature,
  showUSPs?: {
    active?: boolean,
    resultpage?: boolean,
  },
  showNewsBanner?: {
    // DEPRECATED: Banner need to be integrated via CMS or cached from CosmicJS
    // resultpage?: boolean
    active?: boolean
  },
  homepageFullscreenSearch?: Feature,
  usabilla?: {
    active?: boolean,
    id1?: string,
    id2?: string,
  },
  showAverageSalaryOnResultsPage?: Feature,
  hideDirectApplyLink?: Feature,
  similarJobs?: {
    active?: boolean,
    similarItemsOnResultPage?: number,
    similarItemsOnResultPageIndex?: number,
    trackedItemsForResultList?: number,
    similarItemsOnJobDetailsPage?: number,
    similarJobsOnLandingPage?: number,
    similarJobsInPreview?: number,
  },
  clickableJobItemTags?: Feature,
  salaryBenchmark?: Feature,
  openJobInNewWindow?: Feature,
  scrollingSidebarContent?: {
    active?: boolean,
    content?: "SimilarJobs" | "JobAlert" | "SideBarFilter",
  },
  jobHoverPreview?: {
    active?: boolean,
    showfor?: "small" | "medium" | "both",
    detailsParsed?: "parsed" | "unparsed" | "both",
    description?: boolean,
    descriptionLength?: number,
    duties?: boolean,
    location?: boolean,
    similarJobs?: boolean,
    tabOrder: Array<{
      tabType: JobHoverTabs
    }>,
    defaultTab: JobHoverTabs,
  },
  affiliate?: {
    active?: boolean,
    manager?: AffiliateManager,
    partner?: Array<AffiliatePartner>,
  },
  sidebarFilter?: {
    active?: boolean,
    category?: "sectorLevel1" | "employmentTypes",
    listIndexOnMobile?: number,
    showTooltip?: boolean,
    tooltipOffsetInSec?: number,
    pushFacetsFoundOnPage?: boolean,
    hideForMobile?: boolean,
  },
  showFilterAsTags?: {
    active?: boolean,
    showAllActiveFilters?: boolean,
  },
  similarJobsFilterPerItem?: {
    active?: boolean,
    categories?: Array<FilterCategories>,
    fallbackCategories1?: Array<FilterCategories>,
    fallbackCategories2?: Array<FilterCategories>,
    hideForMobile?: boolean,
  },
  removeIrrelevantItems?: {
    active?: boolean,
    cookieExpiryInDays?: number,
  },
  blog?: {
    active?: boolean,
    link?: string,
  },
  minifiedCookieHint?: Feature,
  infiniteScrolling?: {
    active?: boolean,
    jobalertBreakerIndex?: number,
    similarJobsBreakerIndex?: number,
  },
  facelift?: Feature,
  additionalSearchIcon?: Feature,
  stickyHeader?: {
    active?: boolean,
    desktop?: boolean,
    mobile?: boolean,
  },
  inputPlaceholder?: {
    active?: boolean,
    title?: string,
    location?: string,
  },
  uncollapseSearchLayer?: Feature,
  jobitemTitle?: {
    active?: boolean,
    citySearch?: number,
    titleSearch?: number,
    expertSearch?: number,
  },
  filterOrder?: {
    active?: boolean,
    order?: Array<("employmentTypes" | "workingTimes" | "industries" | "companies" | "timeCreatedFilter")>,
  },
};

declare type Schema = {
  // DEPRECATED: lives in site-config
  // baseUrl: string
  // DEPRECATED: lives in site-config
  // defaultLocale: "de" | "nl" | "fr" | "en" | "en-GB" | "en-US"
  // DEPRECATED: lives in site-config
  // currency?: string
  tld: string,
  allowRobots?: boolean,
  protocol?: string,
  socialNetworkAccounts?: SocialAccounts,
  gtm: GoogleTagManager,
  appcast?: Appcast,
  features: Features,
  cmsEnv?: string,
  radiusSearch?: {
    numbers?: Array<number>
  },
  loginHost: string,
  site: string,
  urlschema: any,
  routes: any,
  userAgent: string,
};