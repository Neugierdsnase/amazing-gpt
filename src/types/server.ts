export type RouteParamsType = {
  slug: string;
};

export type UrlParamsType = {
  searchParams: SearchParamsType;
};

export type RouteMetadataType = {
  params: RouteParamsType;
  url: UrlParamsType;
};
