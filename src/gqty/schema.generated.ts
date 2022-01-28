/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  timestamptz: any;
  uuid: any;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
}

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export interface authProviderRequests_bool_exp {
  _and?: InputMaybe<Array<authProviderRequests_bool_exp>>;
  _not?: InputMaybe<authProviderRequests_bool_exp>;
  _or?: InputMaybe<Array<authProviderRequests_bool_exp>>;
  id?: InputMaybe<uuid_comparison_exp>;
  redirectUrl?: InputMaybe<String_comparison_exp>;
}

/** unique or primary key constraints on table "auth.provider_requests" */
export enum authProviderRequests_constraint {
  /** unique or primary key constraint */
  provider_requests_pkey = "provider_requests_pkey",
}

/** input type for inserting data into table "auth.provider_requests" */
export interface authProviderRequests_insert_input {
  id?: InputMaybe<Scalars["uuid"]>;
  redirectUrl?: InputMaybe<Scalars["String"]>;
}

/** on conflict condition type for table "auth.provider_requests" */
export interface authProviderRequests_on_conflict {
  constraint: authProviderRequests_constraint;
  update_columns?: Array<authProviderRequests_update_column>;
  where?: InputMaybe<authProviderRequests_bool_exp>;
}

/** Ordering options when selecting data from "auth.provider_requests". */
export interface authProviderRequests_order_by {
  id?: InputMaybe<order_by>;
  redirectUrl?: InputMaybe<order_by>;
}

/** primary key columns input for table: authProviderRequests */
export interface authProviderRequests_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.provider_requests" */
export enum authProviderRequests_select_column {
  /** column name */
  id = "id",
  /** column name */
  redirectUrl = "redirectUrl",
}

/** input type for updating data in table "auth.provider_requests" */
export interface authProviderRequests_set_input {
  id?: InputMaybe<Scalars["uuid"]>;
  redirectUrl?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "auth.provider_requests" */
export enum authProviderRequests_update_column {
  /** column name */
  id = "id",
  /** column name */
  redirectUrl = "redirectUrl",
}

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export interface authProviders_bool_exp {
  _and?: InputMaybe<Array<authProviders_bool_exp>>;
  _not?: InputMaybe<authProviders_bool_exp>;
  _or?: InputMaybe<Array<authProviders_bool_exp>>;
  id?: InputMaybe<String_comparison_exp>;
  userProviders?: InputMaybe<authUserProviders_bool_exp>;
}

/** unique or primary key constraints on table "auth.providers" */
export enum authProviders_constraint {
  /** unique or primary key constraint */
  providers_pkey = "providers_pkey",
}

/** input type for inserting data into table "auth.providers" */
export interface authProviders_insert_input {
  id?: InputMaybe<Scalars["String"]>;
  userProviders?: InputMaybe<authUserProviders_arr_rel_insert_input>;
}

/** input type for inserting object relation for remote table "auth.providers" */
export interface authProviders_obj_rel_insert_input {
  data: authProviders_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<authProviders_on_conflict>;
}

/** on conflict condition type for table "auth.providers" */
export interface authProviders_on_conflict {
  constraint: authProviders_constraint;
  update_columns?: Array<authProviders_update_column>;
  where?: InputMaybe<authProviders_bool_exp>;
}

/** Ordering options when selecting data from "auth.providers". */
export interface authProviders_order_by {
  id?: InputMaybe<order_by>;
  userProviders_aggregate?: InputMaybe<authUserProviders_aggregate_order_by>;
}

/** primary key columns input for table: authProviders */
export interface authProviders_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "auth.providers" */
export enum authProviders_select_column {
  /** column name */
  id = "id",
}

/** input type for updating data in table "auth.providers" */
export interface authProviders_set_input {
  id?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "auth.providers" */
export enum authProviders_update_column {
  /** column name */
  id = "id",
}

/** order by aggregate values of table "auth.refresh_tokens" */
export interface authRefreshTokens_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authRefreshTokens_max_order_by>;
  min?: InputMaybe<authRefreshTokens_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export interface authRefreshTokens_arr_rel_insert_input {
  data: Array<authRefreshTokens_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<authRefreshTokens_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export interface authRefreshTokens_bool_exp {
  _and?: InputMaybe<Array<authRefreshTokens_bool_exp>>;
  _not?: InputMaybe<authRefreshTokens_bool_exp>;
  _or?: InputMaybe<Array<authRefreshTokens_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  expiresAt?: InputMaybe<timestamptz_comparison_exp>;
  refreshToken?: InputMaybe<uuid_comparison_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum authRefreshTokens_constraint {
  /** unique or primary key constraint */
  refresh_tokens_pkey = "refresh_tokens_pkey",
}

/** input type for inserting data into table "auth.refresh_tokens" */
export interface authRefreshTokens_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]>;
  refreshToken?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.refresh_tokens" */
export interface authRefreshTokens_max_order_by {
  createdAt?: InputMaybe<order_by>;
  expiresAt?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.refresh_tokens" */
export interface authRefreshTokens_min_order_by {
  createdAt?: InputMaybe<order_by>;
  expiresAt?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on conflict condition type for table "auth.refresh_tokens" */
export interface authRefreshTokens_on_conflict {
  constraint: authRefreshTokens_constraint;
  update_columns?: Array<authRefreshTokens_update_column>;
  where?: InputMaybe<authRefreshTokens_bool_exp>;
}

/** Ordering options when selecting data from "auth.refresh_tokens". */
export interface authRefreshTokens_order_by {
  createdAt?: InputMaybe<order_by>;
  expiresAt?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: authRefreshTokens */
export interface authRefreshTokens_pk_columns_input {
  refreshToken: Scalars["uuid"];
}

/** select columns of table "auth.refresh_tokens" */
export enum authRefreshTokens_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  expiresAt = "expiresAt",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.refresh_tokens" */
export interface authRefreshTokens_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]>;
  refreshToken?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "auth.refresh_tokens" */
export enum authRefreshTokens_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  expiresAt = "expiresAt",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  userId = "userId",
}

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export interface authRoles_bool_exp {
  _and?: InputMaybe<Array<authRoles_bool_exp>>;
  _not?: InputMaybe<authRoles_bool_exp>;
  _or?: InputMaybe<Array<authRoles_bool_exp>>;
  role?: InputMaybe<String_comparison_exp>;
  userRoles?: InputMaybe<authUserRoles_bool_exp>;
  usersByDefaultRole?: InputMaybe<users_bool_exp>;
}

/** unique or primary key constraints on table "auth.roles" */
export enum authRoles_constraint {
  /** unique or primary key constraint */
  roles_pkey = "roles_pkey",
}

/** input type for inserting data into table "auth.roles" */
export interface authRoles_insert_input {
  role?: InputMaybe<Scalars["String"]>;
  userRoles?: InputMaybe<authUserRoles_arr_rel_insert_input>;
  usersByDefaultRole?: InputMaybe<users_arr_rel_insert_input>;
}

/** input type for inserting object relation for remote table "auth.roles" */
export interface authRoles_obj_rel_insert_input {
  data: authRoles_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<authRoles_on_conflict>;
}

/** on conflict condition type for table "auth.roles" */
export interface authRoles_on_conflict {
  constraint: authRoles_constraint;
  update_columns?: Array<authRoles_update_column>;
  where?: InputMaybe<authRoles_bool_exp>;
}

/** Ordering options when selecting data from "auth.roles". */
export interface authRoles_order_by {
  role?: InputMaybe<order_by>;
  userRoles_aggregate?: InputMaybe<authUserRoles_aggregate_order_by>;
  usersByDefaultRole_aggregate?: InputMaybe<users_aggregate_order_by>;
}

/** primary key columns input for table: authRoles */
export interface authRoles_pk_columns_input {
  role: Scalars["String"];
}

/** select columns of table "auth.roles" */
export enum authRoles_select_column {
  /** column name */
  role = "role",
}

/** input type for updating data in table "auth.roles" */
export interface authRoles_set_input {
  role?: InputMaybe<Scalars["String"]>;
}

/** update columns of table "auth.roles" */
export enum authRoles_update_column {
  /** column name */
  role = "role",
}

/** order by aggregate values of table "auth.user_providers" */
export interface authUserProviders_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authUserProviders_max_order_by>;
  min?: InputMaybe<authUserProviders_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.user_providers" */
export interface authUserProviders_arr_rel_insert_input {
  data: Array<authUserProviders_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<authUserProviders_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export interface authUserProviders_bool_exp {
  _and?: InputMaybe<Array<authUserProviders_bool_exp>>;
  _not?: InputMaybe<authUserProviders_bool_exp>;
  _or?: InputMaybe<Array<authUserProviders_bool_exp>>;
  accessToken?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  provider?: InputMaybe<authProviders_bool_exp>;
  providerId?: InputMaybe<String_comparison_exp>;
  providerUserId?: InputMaybe<String_comparison_exp>;
  refreshToken?: InputMaybe<String_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.user_providers" */
export enum authUserProviders_constraint {
  /** unique or primary key constraint */
  user_providers_pkey = "user_providers_pkey",
  /** unique or primary key constraint */
  user_providers_provider_id_provider_user_id_key = "user_providers_provider_id_provider_user_id_key",
  /** unique or primary key constraint */
  user_providers_user_id_provider_id_key = "user_providers_user_id_provider_id_key",
}

/** input type for inserting data into table "auth.user_providers" */
export interface authUserProviders_insert_input {
  accessToken?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  provider?: InputMaybe<authProviders_obj_rel_insert_input>;
  providerId?: InputMaybe<Scalars["String"]>;
  providerUserId?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.user_providers" */
export interface authUserProviders_max_order_by {
  accessToken?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  providerId?: InputMaybe<order_by>;
  providerUserId?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.user_providers" */
export interface authUserProviders_min_order_by {
  accessToken?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  providerId?: InputMaybe<order_by>;
  providerUserId?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on conflict condition type for table "auth.user_providers" */
export interface authUserProviders_on_conflict {
  constraint: authUserProviders_constraint;
  update_columns?: Array<authUserProviders_update_column>;
  where?: InputMaybe<authUserProviders_bool_exp>;
}

/** Ordering options when selecting data from "auth.user_providers". */
export interface authUserProviders_order_by {
  accessToken?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  provider?: InputMaybe<authProviders_order_by>;
  providerId?: InputMaybe<order_by>;
  providerUserId?: InputMaybe<order_by>;
  refreshToken?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: authUserProviders */
export interface authUserProviders_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.user_providers" */
export enum authUserProviders_select_column {
  /** column name */
  accessToken = "accessToken",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  providerId = "providerId",
  /** column name */
  providerUserId = "providerUserId",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.user_providers" */
export interface authUserProviders_set_input {
  accessToken?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  providerId?: InputMaybe<Scalars["String"]>;
  providerUserId?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "auth.user_providers" */
export enum authUserProviders_update_column {
  /** column name */
  accessToken = "accessToken",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  providerId = "providerId",
  /** column name */
  providerUserId = "providerUserId",
  /** column name */
  refreshToken = "refreshToken",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  userId = "userId",
}

/** order by aggregate values of table "auth.user_roles" */
export interface authUserRoles_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<authUserRoles_max_order_by>;
  min?: InputMaybe<authUserRoles_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.user_roles" */
export interface authUserRoles_arr_rel_insert_input {
  data: Array<authUserRoles_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<authUserRoles_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export interface authUserRoles_bool_exp {
  _and?: InputMaybe<Array<authUserRoles_bool_exp>>;
  _not?: InputMaybe<authUserRoles_bool_exp>;
  _or?: InputMaybe<Array<authUserRoles_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  role?: InputMaybe<String_comparison_exp>;
  roleByRole?: InputMaybe<authRoles_bool_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "auth.user_roles" */
export enum authUserRoles_constraint {
  /** unique or primary key constraint */
  user_roles_pkey = "user_roles_pkey",
  /** unique or primary key constraint */
  user_roles_user_id_role_key = "user_roles_user_id_role_key",
}

/** input type for inserting data into table "auth.user_roles" */
export interface authUserRoles_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
  roleByRole?: InputMaybe<authRoles_obj_rel_insert_input>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "auth.user_roles" */
export interface authUserRoles_max_order_by {
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.user_roles" */
export interface authUserRoles_min_order_by {
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** on conflict condition type for table "auth.user_roles" */
export interface authUserRoles_on_conflict {
  constraint: authUserRoles_constraint;
  update_columns?: Array<authUserRoles_update_column>;
  where?: InputMaybe<authUserRoles_bool_exp>;
}

/** Ordering options when selecting data from "auth.user_roles". */
export interface authUserRoles_order_by {
  createdAt?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  role?: InputMaybe<order_by>;
  roleByRole?: InputMaybe<authRoles_order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: authUserRoles */
export interface authUserRoles_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.user_roles" */
export enum authUserRoles_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  role = "role",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "auth.user_roles" */
export interface authUserRoles_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "auth.user_roles" */
export enum authUserRoles_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  id = "id",
  /** column name */
  role = "role",
  /** column name */
  userId = "userId",
}

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export interface buckets_bool_exp {
  _and?: InputMaybe<Array<buckets_bool_exp>>;
  _not?: InputMaybe<buckets_bool_exp>;
  _or?: InputMaybe<Array<buckets_bool_exp>>;
  cacheControl?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  downloadExpiration?: InputMaybe<Int_comparison_exp>;
  files?: InputMaybe<files_bool_exp>;
  id?: InputMaybe<String_comparison_exp>;
  maxUploadFileSize?: InputMaybe<Int_comparison_exp>;
  minUploadFileSize?: InputMaybe<Int_comparison_exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "storage.buckets" */
export enum buckets_constraint {
  /** unique or primary key constraint */
  buckets_pkey = "buckets_pkey",
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export interface buckets_inc_input {
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
}

/** input type for inserting data into table "storage.buckets" */
export interface buckets_insert_input {
  cacheControl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  files?: InputMaybe<files_arr_rel_insert_input>;
  id?: InputMaybe<Scalars["String"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** input type for inserting object relation for remote table "storage.buckets" */
export interface buckets_obj_rel_insert_input {
  data: buckets_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<buckets_on_conflict>;
}

/** on conflict condition type for table "storage.buckets" */
export interface buckets_on_conflict {
  constraint: buckets_constraint;
  update_columns?: Array<buckets_update_column>;
  where?: InputMaybe<buckets_bool_exp>;
}

/** Ordering options when selecting data from "storage.buckets". */
export interface buckets_order_by {
  cacheControl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  downloadExpiration?: InputMaybe<order_by>;
  files_aggregate?: InputMaybe<files_aggregate_order_by>;
  id?: InputMaybe<order_by>;
  maxUploadFileSize?: InputMaybe<order_by>;
  minUploadFileSize?: InputMaybe<order_by>;
  presignedUrlsEnabled?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** primary key columns input for table: buckets */
export interface buckets_pk_columns_input {
  id: Scalars["String"];
}

/** select columns of table "storage.buckets" */
export enum buckets_select_column {
  /** column name */
  cacheControl = "cacheControl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  downloadExpiration = "downloadExpiration",
  /** column name */
  id = "id",
  /** column name */
  maxUploadFileSize = "maxUploadFileSize",
  /** column name */
  minUploadFileSize = "minUploadFileSize",
  /** column name */
  presignedUrlsEnabled = "presignedUrlsEnabled",
  /** column name */
  updatedAt = "updatedAt",
}

/** input type for updating data in table "storage.buckets" */
export interface buckets_set_input {
  cacheControl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "storage.buckets" */
export enum buckets_update_column {
  /** column name */
  cacheControl = "cacheControl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  downloadExpiration = "downloadExpiration",
  /** column name */
  id = "id",
  /** column name */
  maxUploadFileSize = "maxUploadFileSize",
  /** column name */
  minUploadFileSize = "minUploadFileSize",
  /** column name */
  presignedUrlsEnabled = "presignedUrlsEnabled",
  /** column name */
  updatedAt = "updatedAt",
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export interface citext_comparison_exp {
  _eq?: InputMaybe<Scalars["citext"]>;
  _gt?: InputMaybe<Scalars["citext"]>;
  _gte?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["citext"]>;
  _in?: InputMaybe<Array<Scalars["citext"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["citext"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["citext"]>;
  _lt?: InputMaybe<Scalars["citext"]>;
  _lte?: InputMaybe<Scalars["citext"]>;
  _neq?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["citext"]>;
  _nin?: InputMaybe<Array<Scalars["citext"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["citext"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["citext"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["citext"]>;
}

/** order by aggregate values of table "doc_links" */
export interface doc_links_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<doc_links_max_order_by>;
  min?: InputMaybe<doc_links_min_order_by>;
}

/** input type for inserting array relation for remote table "doc_links" */
export interface doc_links_arr_rel_insert_input {
  data: Array<doc_links_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<doc_links_on_conflict>;
}

/** Boolean expression to filter rows from the table "doc_links". All fields are combined with a logical 'AND'. */
export interface doc_links_bool_exp {
  _and?: InputMaybe<Array<doc_links_bool_exp>>;
  _not?: InputMaybe<doc_links_bool_exp>;
  _or?: InputMaybe<Array<doc_links_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  doc?: InputMaybe<docs_bool_exp>;
  docId?: InputMaybe<uuid_comparison_exp>;
  docVisits?: InputMaybe<doc_visits_bool_exp>;
  downloadAllowed?: InputMaybe<Boolean_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  isActive?: InputMaybe<Boolean_comparison_exp>;
  passcode?: InputMaybe<String_comparison_exp>;
  requireEmailToView?: InputMaybe<Boolean_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "doc_links" */
export enum doc_links_constraint {
  /** unique or primary key constraint */
  doc_links_pkey = "doc_links_pkey",
}

/** input type for inserting data into table "doc_links" */
export interface doc_links_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  doc?: InputMaybe<docs_obj_rel_insert_input>;
  docId?: InputMaybe<Scalars["uuid"]>;
  docVisits?: InputMaybe<doc_visits_arr_rel_insert_input>;
  downloadAllowed?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  passcode?: InputMaybe<Scalars["String"]>;
  requireEmailToView?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** order by max() on columns of table "doc_links" */
export interface doc_links_max_order_by {
  createdAt?: InputMaybe<order_by>;
  docId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  passcode?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** order by min() on columns of table "doc_links" */
export interface doc_links_min_order_by {
  createdAt?: InputMaybe<order_by>;
  docId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  passcode?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** input type for inserting object relation for remote table "doc_links" */
export interface doc_links_obj_rel_insert_input {
  data: doc_links_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<doc_links_on_conflict>;
}

/** on conflict condition type for table "doc_links" */
export interface doc_links_on_conflict {
  constraint: doc_links_constraint;
  update_columns?: Array<doc_links_update_column>;
  where?: InputMaybe<doc_links_bool_exp>;
}

/** Ordering options when selecting data from "doc_links". */
export interface doc_links_order_by {
  createdAt?: InputMaybe<order_by>;
  doc?: InputMaybe<docs_order_by>;
  docId?: InputMaybe<order_by>;
  docVisits_aggregate?: InputMaybe<doc_visits_aggregate_order_by>;
  downloadAllowed?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isActive?: InputMaybe<order_by>;
  passcode?: InputMaybe<order_by>;
  requireEmailToView?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** primary key columns input for table: doc_links */
export interface doc_links_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "doc_links" */
export enum doc_links_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  docId = "docId",
  /** column name */
  downloadAllowed = "downloadAllowed",
  /** column name */
  id = "id",
  /** column name */
  isActive = "isActive",
  /** column name */
  passcode = "passcode",
  /** column name */
  requireEmailToView = "requireEmailToView",
  /** column name */
  updatedAt = "updatedAt",
}

/** input type for updating data in table "doc_links" */
export interface doc_links_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  docId?: InputMaybe<Scalars["uuid"]>;
  downloadAllowed?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  passcode?: InputMaybe<Scalars["String"]>;
  requireEmailToView?: InputMaybe<Scalars["Boolean"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "doc_links" */
export enum doc_links_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  docId = "docId",
  /** column name */
  downloadAllowed = "downloadAllowed",
  /** column name */
  id = "id",
  /** column name */
  isActive = "isActive",
  /** column name */
  passcode = "passcode",
  /** column name */
  requireEmailToView = "requireEmailToView",
  /** column name */
  updatedAt = "updatedAt",
}

/** order by aggregate values of table "doc_visits" */
export interface doc_visits_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<doc_visits_max_order_by>;
  min?: InputMaybe<doc_visits_min_order_by>;
}

/** input type for inserting array relation for remote table "doc_visits" */
export interface doc_visits_arr_rel_insert_input {
  data: Array<doc_visits_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<doc_visits_on_conflict>;
}

/** Boolean expression to filter rows from the table "doc_visits". All fields are combined with a logical 'AND'. */
export interface doc_visits_bool_exp {
  _and?: InputMaybe<Array<doc_visits_bool_exp>>;
  _not?: InputMaybe<doc_visits_bool_exp>;
  _or?: InputMaybe<Array<doc_visits_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  docLink?: InputMaybe<doc_links_bool_exp>;
  docLinkId?: InputMaybe<uuid_comparison_exp>;
  email?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
}

/** unique or primary key constraints on table "doc_visits" */
export enum doc_visits_constraint {
  /** unique or primary key constraint */
  doc_visits_pkey = "doc_visits_pkey",
}

/** input type for inserting data into table "doc_visits" */
export interface doc_visits_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  docLink?: InputMaybe<doc_links_obj_rel_insert_input>;
  docLinkId?: InputMaybe<Scalars["uuid"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** order by max() on columns of table "doc_visits" */
export interface doc_visits_max_order_by {
  createdAt?: InputMaybe<order_by>;
  docLinkId?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** order by min() on columns of table "doc_visits" */
export interface doc_visits_min_order_by {
  createdAt?: InputMaybe<order_by>;
  docLinkId?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** on conflict condition type for table "doc_visits" */
export interface doc_visits_on_conflict {
  constraint: doc_visits_constraint;
  update_columns?: Array<doc_visits_update_column>;
  where?: InputMaybe<doc_visits_bool_exp>;
}

/** Ordering options when selecting data from "doc_visits". */
export interface doc_visits_order_by {
  createdAt?: InputMaybe<order_by>;
  docLink?: InputMaybe<doc_links_order_by>;
  docLinkId?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** primary key columns input for table: doc_visits */
export interface doc_visits_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "doc_visits" */
export enum doc_visits_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  docLinkId = "docLinkId",
  /** column name */
  email = "email",
  /** column name */
  id = "id",
  /** column name */
  updatedAt = "updatedAt",
}

/** input type for updating data in table "doc_visits" */
export interface doc_visits_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  docLinkId?: InputMaybe<Scalars["uuid"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "doc_visits" */
export enum doc_visits_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  docLinkId = "docLinkId",
  /** column name */
  email = "email",
  /** column name */
  id = "id",
  /** column name */
  updatedAt = "updatedAt",
}

/** order by aggregate values of table "docs" */
export interface docs_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<docs_max_order_by>;
  min?: InputMaybe<docs_min_order_by>;
}

/** input type for inserting array relation for remote table "docs" */
export interface docs_arr_rel_insert_input {
  data: Array<docs_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<docs_on_conflict>;
}

/** Boolean expression to filter rows from the table "docs". All fields are combined with a logical 'AND'. */
export interface docs_bool_exp {
  _and?: InputMaybe<Array<docs_bool_exp>>;
  _not?: InputMaybe<docs_bool_exp>;
  _or?: InputMaybe<Array<docs_bool_exp>>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  docLinks?: InputMaybe<doc_links_bool_exp>;
  file?: InputMaybe<files_bool_exp>;
  fileId?: InputMaybe<uuid_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  user?: InputMaybe<users_bool_exp>;
  userId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "docs" */
export enum docs_constraint {
  /** unique or primary key constraint */
  docs_pkey = "docs_pkey",
}

/** input type for inserting data into table "docs" */
export interface docs_insert_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  docLinks?: InputMaybe<doc_links_arr_rel_insert_input>;
  file?: InputMaybe<files_obj_rel_insert_input>;
  fileId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  user?: InputMaybe<users_obj_rel_insert_input>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "docs" */
export interface docs_max_order_by {
  createdAt?: InputMaybe<order_by>;
  fileId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "docs" */
export interface docs_min_order_by {
  createdAt?: InputMaybe<order_by>;
  fileId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userId?: InputMaybe<order_by>;
}

/** input type for inserting object relation for remote table "docs" */
export interface docs_obj_rel_insert_input {
  data: docs_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<docs_on_conflict>;
}

/** on conflict condition type for table "docs" */
export interface docs_on_conflict {
  constraint: docs_constraint;
  update_columns?: Array<docs_update_column>;
  where?: InputMaybe<docs_bool_exp>;
}

/** Ordering options when selecting data from "docs". */
export interface docs_order_by {
  createdAt?: InputMaybe<order_by>;
  docLinks_aggregate?: InputMaybe<doc_links_aggregate_order_by>;
  file?: InputMaybe<files_order_by>;
  fileId?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  user?: InputMaybe<users_order_by>;
  userId?: InputMaybe<order_by>;
}

/** primary key columns input for table: docs */
export interface docs_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "docs" */
export enum docs_select_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  fileId = "fileId",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  userId = "userId",
}

/** input type for updating data in table "docs" */
export interface docs_set_input {
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  fileId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
}

/** update columns of table "docs" */
export enum docs_update_column {
  /** column name */
  createdAt = "createdAt",
  /** column name */
  fileId = "fileId",
  /** column name */
  id = "id",
  /** column name */
  name = "name",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  userId = "userId",
}

/** order by aggregate values of table "storage.files" */
export interface files_aggregate_order_by {
  avg?: InputMaybe<files_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<files_max_order_by>;
  min?: InputMaybe<files_min_order_by>;
  stddev?: InputMaybe<files_stddev_order_by>;
  stddev_pop?: InputMaybe<files_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<files_stddev_samp_order_by>;
  sum?: InputMaybe<files_sum_order_by>;
  var_pop?: InputMaybe<files_var_pop_order_by>;
  var_samp?: InputMaybe<files_var_samp_order_by>;
  variance?: InputMaybe<files_variance_order_by>;
}

/** input type for inserting array relation for remote table "storage.files" */
export interface files_arr_rel_insert_input {
  data: Array<files_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<files_on_conflict>;
}

/** order by avg() on columns of table "storage.files" */
export interface files_avg_order_by {
  size?: InputMaybe<order_by>;
}

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export interface files_bool_exp {
  _and?: InputMaybe<Array<files_bool_exp>>;
  _not?: InputMaybe<files_bool_exp>;
  _or?: InputMaybe<Array<files_bool_exp>>;
  bucket?: InputMaybe<buckets_bool_exp>;
  bucketId?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  docs?: InputMaybe<docs_bool_exp>;
  etag?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  isUploaded?: InputMaybe<Boolean_comparison_exp>;
  mimeType?: InputMaybe<String_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  size?: InputMaybe<Int_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  uploadedByUserId?: InputMaybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "storage.files" */
export enum files_constraint {
  /** unique or primary key constraint */
  files_pkey = "files_pkey",
}

/** input type for incrementing numeric columns in table "storage.files" */
export interface files_inc_input {
  size?: InputMaybe<Scalars["Int"]>;
}

/** input type for inserting data into table "storage.files" */
export interface files_insert_input {
  bucket?: InputMaybe<buckets_obj_rel_insert_input>;
  bucketId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  docs?: InputMaybe<docs_arr_rel_insert_input>;
  etag?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]>;
}

/** order by max() on columns of table "storage.files" */
export interface files_max_order_by {
  bucketId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  etag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mimeType?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  size?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  uploadedByUserId?: InputMaybe<order_by>;
}

/** order by min() on columns of table "storage.files" */
export interface files_min_order_by {
  bucketId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  etag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  mimeType?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  size?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  uploadedByUserId?: InputMaybe<order_by>;
}

/** input type for inserting object relation for remote table "storage.files" */
export interface files_obj_rel_insert_input {
  data: files_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<files_on_conflict>;
}

/** on conflict condition type for table "storage.files" */
export interface files_on_conflict {
  constraint: files_constraint;
  update_columns?: Array<files_update_column>;
  where?: InputMaybe<files_bool_exp>;
}

/** Ordering options when selecting data from "storage.files". */
export interface files_order_by {
  bucket?: InputMaybe<buckets_order_by>;
  bucketId?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  docs_aggregate?: InputMaybe<docs_aggregate_order_by>;
  etag?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isUploaded?: InputMaybe<order_by>;
  mimeType?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  size?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  uploadedByUserId?: InputMaybe<order_by>;
}

/** primary key columns input for table: files */
export interface files_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "storage.files" */
export enum files_select_column {
  /** column name */
  bucketId = "bucketId",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  etag = "etag",
  /** column name */
  id = "id",
  /** column name */
  isUploaded = "isUploaded",
  /** column name */
  mimeType = "mimeType",
  /** column name */
  name = "name",
  /** column name */
  size = "size",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  uploadedByUserId = "uploadedByUserId",
}

/** input type for updating data in table "storage.files" */
export interface files_set_input {
  bucketId?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  etag?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  size?: InputMaybe<Scalars["Int"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]>;
}

/** order by stddev() on columns of table "storage.files" */
export interface files_stddev_order_by {
  size?: InputMaybe<order_by>;
}

/** order by stddev_pop() on columns of table "storage.files" */
export interface files_stddev_pop_order_by {
  size?: InputMaybe<order_by>;
}

/** order by stddev_samp() on columns of table "storage.files" */
export interface files_stddev_samp_order_by {
  size?: InputMaybe<order_by>;
}

/** order by sum() on columns of table "storage.files" */
export interface files_sum_order_by {
  size?: InputMaybe<order_by>;
}

/** update columns of table "storage.files" */
export enum files_update_column {
  /** column name */
  bucketId = "bucketId",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  etag = "etag",
  /** column name */
  id = "id",
  /** column name */
  isUploaded = "isUploaded",
  /** column name */
  mimeType = "mimeType",
  /** column name */
  name = "name",
  /** column name */
  size = "size",
  /** column name */
  updatedAt = "updatedAt",
  /** column name */
  uploadedByUserId = "uploadedByUserId",
}

/** order by var_pop() on columns of table "storage.files" */
export interface files_var_pop_order_by {
  size?: InputMaybe<order_by>;
}

/** order by var_samp() on columns of table "storage.files" */
export interface files_var_samp_order_by {
  size?: InputMaybe<order_by>;
}

/** order by variance() on columns of table "storage.files" */
export interface files_variance_order_by {
  size?: InputMaybe<order_by>;
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
}

/** order by aggregate values of table "auth.users" */
export interface users_aggregate_order_by {
  count?: InputMaybe<order_by>;
  max?: InputMaybe<users_max_order_by>;
  min?: InputMaybe<users_min_order_by>;
}

/** input type for inserting array relation for remote table "auth.users" */
export interface users_arr_rel_insert_input {
  data: Array<users_insert_input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<users_on_conflict>;
}

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {
  _and?: InputMaybe<Array<users_bool_exp>>;
  _not?: InputMaybe<users_bool_exp>;
  _or?: InputMaybe<Array<users_bool_exp>>;
  activeMfaType?: InputMaybe<String_comparison_exp>;
  avatarUrl?: InputMaybe<String_comparison_exp>;
  createdAt?: InputMaybe<timestamptz_comparison_exp>;
  defaultRole?: InputMaybe<String_comparison_exp>;
  defaultRoleByRole?: InputMaybe<authRoles_bool_exp>;
  disabled?: InputMaybe<Boolean_comparison_exp>;
  displayName?: InputMaybe<String_comparison_exp>;
  docs?: InputMaybe<docs_bool_exp>;
  email?: InputMaybe<citext_comparison_exp>;
  emailVerified?: InputMaybe<Boolean_comparison_exp>;
  id?: InputMaybe<uuid_comparison_exp>;
  isAnonymous?: InputMaybe<Boolean_comparison_exp>;
  lastSeen?: InputMaybe<timestamptz_comparison_exp>;
  locale?: InputMaybe<String_comparison_exp>;
  newEmail?: InputMaybe<citext_comparison_exp>;
  otpHash?: InputMaybe<String_comparison_exp>;
  otpHashExpiresAt?: InputMaybe<timestamptz_comparison_exp>;
  otpMethodLastUsed?: InputMaybe<String_comparison_exp>;
  passwordHash?: InputMaybe<String_comparison_exp>;
  phoneNumber?: InputMaybe<String_comparison_exp>;
  phoneNumberVerified?: InputMaybe<Boolean_comparison_exp>;
  refreshTokens?: InputMaybe<authRefreshTokens_bool_exp>;
  roles?: InputMaybe<authUserRoles_bool_exp>;
  ticket?: InputMaybe<String_comparison_exp>;
  ticketExpiresAt?: InputMaybe<timestamptz_comparison_exp>;
  totpSecret?: InputMaybe<String_comparison_exp>;
  updatedAt?: InputMaybe<timestamptz_comparison_exp>;
  userProviders?: InputMaybe<authUserProviders_bool_exp>;
}

/** unique or primary key constraints on table "auth.users" */
export enum users_constraint {
  /** unique or primary key constraint */
  users_email_key = "users_email_key",
  /** unique or primary key constraint */
  users_phone_number_key = "users_phone_number_key",
  /** unique or primary key constraint */
  users_pkey = "users_pkey",
}

/** input type for inserting data into table "auth.users" */
export interface users_insert_input {
  activeMfaType?: InputMaybe<Scalars["String"]>;
  avatarUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  defaultRole?: InputMaybe<Scalars["String"]>;
  defaultRoleByRole?: InputMaybe<authRoles_obj_rel_insert_input>;
  disabled?: InputMaybe<Scalars["Boolean"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  docs?: InputMaybe<docs_arr_rel_insert_input>;
  email?: InputMaybe<Scalars["citext"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  locale?: InputMaybe<Scalars["String"]>;
  newEmail?: InputMaybe<Scalars["citext"]>;
  otpHash?: InputMaybe<Scalars["String"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]>;
  refreshTokens?: InputMaybe<authRefreshTokens_arr_rel_insert_input>;
  roles?: InputMaybe<authUserRoles_arr_rel_insert_input>;
  ticket?: InputMaybe<Scalars["String"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  totpSecret?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
  userProviders?: InputMaybe<authUserProviders_arr_rel_insert_input>;
}

/** order by max() on columns of table "auth.users" */
export interface users_max_order_by {
  activeMfaType?: InputMaybe<order_by>;
  avatarUrl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  defaultRole?: InputMaybe<order_by>;
  displayName?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastSeen?: InputMaybe<order_by>;
  locale?: InputMaybe<order_by>;
  newEmail?: InputMaybe<order_by>;
  otpHash?: InputMaybe<order_by>;
  otpHashExpiresAt?: InputMaybe<order_by>;
  otpMethodLastUsed?: InputMaybe<order_by>;
  passwordHash?: InputMaybe<order_by>;
  phoneNumber?: InputMaybe<order_by>;
  ticket?: InputMaybe<order_by>;
  ticketExpiresAt?: InputMaybe<order_by>;
  totpSecret?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** order by min() on columns of table "auth.users" */
export interface users_min_order_by {
  activeMfaType?: InputMaybe<order_by>;
  avatarUrl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  defaultRole?: InputMaybe<order_by>;
  displayName?: InputMaybe<order_by>;
  email?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  lastSeen?: InputMaybe<order_by>;
  locale?: InputMaybe<order_by>;
  newEmail?: InputMaybe<order_by>;
  otpHash?: InputMaybe<order_by>;
  otpHashExpiresAt?: InputMaybe<order_by>;
  otpMethodLastUsed?: InputMaybe<order_by>;
  passwordHash?: InputMaybe<order_by>;
  phoneNumber?: InputMaybe<order_by>;
  ticket?: InputMaybe<order_by>;
  ticketExpiresAt?: InputMaybe<order_by>;
  totpSecret?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
}

/** input type for inserting object relation for remote table "auth.users" */
export interface users_obj_rel_insert_input {
  data: users_insert_input;
  /** on conflict condition */
  on_conflict?: InputMaybe<users_on_conflict>;
}

/** on conflict condition type for table "auth.users" */
export interface users_on_conflict {
  constraint: users_constraint;
  update_columns?: Array<users_update_column>;
  where?: InputMaybe<users_bool_exp>;
}

/** Ordering options when selecting data from "auth.users". */
export interface users_order_by {
  activeMfaType?: InputMaybe<order_by>;
  avatarUrl?: InputMaybe<order_by>;
  createdAt?: InputMaybe<order_by>;
  defaultRole?: InputMaybe<order_by>;
  defaultRoleByRole?: InputMaybe<authRoles_order_by>;
  disabled?: InputMaybe<order_by>;
  displayName?: InputMaybe<order_by>;
  docs_aggregate?: InputMaybe<docs_aggregate_order_by>;
  email?: InputMaybe<order_by>;
  emailVerified?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  isAnonymous?: InputMaybe<order_by>;
  lastSeen?: InputMaybe<order_by>;
  locale?: InputMaybe<order_by>;
  newEmail?: InputMaybe<order_by>;
  otpHash?: InputMaybe<order_by>;
  otpHashExpiresAt?: InputMaybe<order_by>;
  otpMethodLastUsed?: InputMaybe<order_by>;
  passwordHash?: InputMaybe<order_by>;
  phoneNumber?: InputMaybe<order_by>;
  phoneNumberVerified?: InputMaybe<order_by>;
  refreshTokens_aggregate?: InputMaybe<authRefreshTokens_aggregate_order_by>;
  roles_aggregate?: InputMaybe<authUserRoles_aggregate_order_by>;
  ticket?: InputMaybe<order_by>;
  ticketExpiresAt?: InputMaybe<order_by>;
  totpSecret?: InputMaybe<order_by>;
  updatedAt?: InputMaybe<order_by>;
  userProviders_aggregate?: InputMaybe<authUserProviders_aggregate_order_by>;
}

/** primary key columns input for table: users */
export interface users_pk_columns_input {
  id: Scalars["uuid"];
}

/** select columns of table "auth.users" */
export enum users_select_column {
  /** column name */
  activeMfaType = "activeMfaType",
  /** column name */
  avatarUrl = "avatarUrl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  defaultRole = "defaultRole",
  /** column name */
  disabled = "disabled",
  /** column name */
  displayName = "displayName",
  /** column name */
  email = "email",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  id = "id",
  /** column name */
  isAnonymous = "isAnonymous",
  /** column name */
  lastSeen = "lastSeen",
  /** column name */
  locale = "locale",
  /** column name */
  newEmail = "newEmail",
  /** column name */
  otpHash = "otpHash",
  /** column name */
  otpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  otpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  passwordHash = "passwordHash",
  /** column name */
  phoneNumber = "phoneNumber",
  /** column name */
  phoneNumberVerified = "phoneNumberVerified",
  /** column name */
  ticket = "ticket",
  /** column name */
  ticketExpiresAt = "ticketExpiresAt",
  /** column name */
  totpSecret = "totpSecret",
  /** column name */
  updatedAt = "updatedAt",
}

/** input type for updating data in table "auth.users" */
export interface users_set_input {
  activeMfaType?: InputMaybe<Scalars["String"]>;
  avatarUrl?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]>;
  defaultRole?: InputMaybe<Scalars["String"]>;
  disabled?: InputMaybe<Scalars["Boolean"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["citext"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]>;
  locale?: InputMaybe<Scalars["String"]>;
  newEmail?: InputMaybe<Scalars["citext"]>;
  otpHash?: InputMaybe<Scalars["String"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]>;
  passwordHash?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]>;
  ticket?: InputMaybe<Scalars["String"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]>;
  totpSecret?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]>;
}

/** update columns of table "auth.users" */
export enum users_update_column {
  /** column name */
  activeMfaType = "activeMfaType",
  /** column name */
  avatarUrl = "avatarUrl",
  /** column name */
  createdAt = "createdAt",
  /** column name */
  defaultRole = "defaultRole",
  /** column name */
  disabled = "disabled",
  /** column name */
  displayName = "displayName",
  /** column name */
  email = "email",
  /** column name */
  emailVerified = "emailVerified",
  /** column name */
  id = "id",
  /** column name */
  isAnonymous = "isAnonymous",
  /** column name */
  lastSeen = "lastSeen",
  /** column name */
  locale = "locale",
  /** column name */
  newEmail = "newEmail",
  /** column name */
  otpHash = "otpHash",
  /** column name */
  otpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  otpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  passwordHash = "passwordHash",
  /** column name */
  phoneNumber = "phoneNumber",
  /** column name */
  phoneNumberVerified = "phoneNumberVerified",
  /** column name */
  ticket = "ticket",
  /** column name */
  ticketExpiresAt = "ticketExpiresAt",
  /** column name */
  totpSecret = "totpSecret",
  /** column name */
  updatedAt = "updatedAt",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Int: true,
  String: true,
  authProviderRequests_constraint: true,
  authProviderRequests_select_column: true,
  authProviderRequests_update_column: true,
  authProviders_constraint: true,
  authProviders_select_column: true,
  authProviders_update_column: true,
  authRefreshTokens_constraint: true,
  authRefreshTokens_select_column: true,
  authRefreshTokens_update_column: true,
  authRoles_constraint: true,
  authRoles_select_column: true,
  authRoles_update_column: true,
  authUserProviders_constraint: true,
  authUserProviders_select_column: true,
  authUserProviders_update_column: true,
  authUserRoles_constraint: true,
  authUserRoles_select_column: true,
  authUserRoles_update_column: true,
  buckets_constraint: true,
  buckets_select_column: true,
  buckets_update_column: true,
  citext: true,
  doc_links_constraint: true,
  doc_links_select_column: true,
  doc_links_update_column: true,
  doc_visits_constraint: true,
  doc_visits_select_column: true,
  doc_visits_update_column: true,
  docs_constraint: true,
  docs_select_column: true,
  docs_update_column: true,
  files_constraint: true,
  files_select_column: true,
  files_update_column: true,
  order_by: true,
  timestamptz: true,
  users_constraint: true,
  users_select_column: true,
  users_update_column: true,
  uuid: true,
};
export const generatedSchema = {
  Boolean_comparison_exp: {
    _eq: { __type: "Boolean" },
    _gt: { __type: "Boolean" },
    _gte: { __type: "Boolean" },
    _in: { __type: "[Boolean!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "Boolean" },
    _lte: { __type: "Boolean" },
    _neq: { __type: "Boolean" },
    _nin: { __type: "[Boolean!]" },
  },
  Int_comparison_exp: {
    _eq: { __type: "Int" },
    _gt: { __type: "Int" },
    _gte: { __type: "Int" },
    _in: { __type: "[Int!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "Int" },
    _lte: { __type: "Int" },
    _neq: { __type: "Int" },
    _nin: { __type: "[Int!]" },
  },
  String_comparison_exp: {
    _eq: { __type: "String" },
    _gt: { __type: "String" },
    _gte: { __type: "String" },
    _ilike: { __type: "String" },
    _in: { __type: "[String!]" },
    _iregex: { __type: "String" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "String" },
    _lt: { __type: "String" },
    _lte: { __type: "String" },
    _neq: { __type: "String" },
    _nilike: { __type: "String" },
    _nin: { __type: "[String!]" },
    _niregex: { __type: "String" },
    _nlike: { __type: "String" },
    _nregex: { __type: "String" },
    _nsimilar: { __type: "String" },
    _regex: { __type: "String" },
    _similar: { __type: "String" },
  },
  authProviderRequests: {
    __typename: { __type: "String!" },
    id: { __type: "uuid!" },
    redirectUrl: { __type: "String!" },
  },
  authProviderRequests_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authProviderRequests_aggregate_fields" },
    nodes: { __type: "[authProviderRequests!]!" },
  },
  authProviderRequests_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authProviderRequests_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authProviderRequests_max_fields" },
    min: { __type: "authProviderRequests_min_fields" },
  },
  authProviderRequests_bool_exp: {
    _and: { __type: "[authProviderRequests_bool_exp!]" },
    _not: { __type: "authProviderRequests_bool_exp" },
    _or: { __type: "[authProviderRequests_bool_exp!]" },
    id: { __type: "uuid_comparison_exp" },
    redirectUrl: { __type: "String_comparison_exp" },
  },
  authProviderRequests_insert_input: {
    id: { __type: "uuid" },
    redirectUrl: { __type: "String" },
  },
  authProviderRequests_max_fields: {
    __typename: { __type: "String!" },
    id: { __type: "uuid" },
    redirectUrl: { __type: "String" },
  },
  authProviderRequests_min_fields: {
    __typename: { __type: "String!" },
    id: { __type: "uuid" },
    redirectUrl: { __type: "String" },
  },
  authProviderRequests_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authProviderRequests!]!" },
  },
  authProviderRequests_on_conflict: {
    constraint: { __type: "authProviderRequests_constraint!" },
    update_columns: { __type: "[authProviderRequests_update_column!]!" },
    where: { __type: "authProviderRequests_bool_exp" },
  },
  authProviderRequests_order_by: {
    id: { __type: "order_by" },
    redirectUrl: { __type: "order_by" },
  },
  authProviderRequests_pk_columns_input: { id: { __type: "uuid!" } },
  authProviderRequests_set_input: {
    id: { __type: "uuid" },
    redirectUrl: { __type: "String" },
  },
  authProviders: {
    __typename: { __type: "String!" },
    id: { __type: "String!" },
    userProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    userProviders_aggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
  },
  authProviders_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authProviders_aggregate_fields" },
    nodes: { __type: "[authProviders!]!" },
  },
  authProviders_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authProviders_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authProviders_max_fields" },
    min: { __type: "authProviders_min_fields" },
  },
  authProviders_bool_exp: {
    _and: { __type: "[authProviders_bool_exp!]" },
    _not: { __type: "authProviders_bool_exp" },
    _or: { __type: "[authProviders_bool_exp!]" },
    id: { __type: "String_comparison_exp" },
    userProviders: { __type: "authUserProviders_bool_exp" },
  },
  authProviders_insert_input: {
    id: { __type: "String" },
    userProviders: { __type: "authUserProviders_arr_rel_insert_input" },
  },
  authProviders_max_fields: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
  },
  authProviders_min_fields: {
    __typename: { __type: "String!" },
    id: { __type: "String" },
  },
  authProviders_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authProviders!]!" },
  },
  authProviders_obj_rel_insert_input: {
    data: { __type: "authProviders_insert_input!" },
    on_conflict: { __type: "authProviders_on_conflict" },
  },
  authProviders_on_conflict: {
    constraint: { __type: "authProviders_constraint!" },
    update_columns: { __type: "[authProviders_update_column!]!" },
    where: { __type: "authProviders_bool_exp" },
  },
  authProviders_order_by: {
    id: { __type: "order_by" },
    userProviders_aggregate: { __type: "authUserProviders_aggregate_order_by" },
  },
  authProviders_pk_columns_input: { id: { __type: "String!" } },
  authProviders_set_input: { id: { __type: "String" } },
  authRefreshTokens: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    expiresAt: { __type: "timestamptz!" },
    refreshToken: { __type: "uuid!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authRefreshTokens_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authRefreshTokens_aggregate_fields" },
    nodes: { __type: "[authRefreshTokens!]!" },
  },
  authRefreshTokens_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authRefreshTokens_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authRefreshTokens_max_fields" },
    min: { __type: "authRefreshTokens_min_fields" },
  },
  authRefreshTokens_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "authRefreshTokens_max_order_by" },
    min: { __type: "authRefreshTokens_min_order_by" },
  },
  authRefreshTokens_arr_rel_insert_input: {
    data: { __type: "[authRefreshTokens_insert_input!]!" },
    on_conflict: { __type: "authRefreshTokens_on_conflict" },
  },
  authRefreshTokens_bool_exp: {
    _and: { __type: "[authRefreshTokens_bool_exp!]" },
    _not: { __type: "authRefreshTokens_bool_exp" },
    _or: { __type: "[authRefreshTokens_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    expiresAt: { __type: "timestamptz_comparison_exp" },
    refreshToken: { __type: "uuid_comparison_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authRefreshTokens_insert_input: {
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_max_order_by: {
    createdAt: { __type: "order_by" },
    expiresAt: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authRefreshTokens_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRefreshTokens_min_order_by: {
    createdAt: { __type: "order_by" },
    expiresAt: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authRefreshTokens_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authRefreshTokens!]!" },
  },
  authRefreshTokens_on_conflict: {
    constraint: { __type: "authRefreshTokens_constraint!" },
    update_columns: { __type: "[authRefreshTokens_update_column!]!" },
    where: { __type: "authRefreshTokens_bool_exp" },
  },
  authRefreshTokens_order_by: {
    createdAt: { __type: "order_by" },
    expiresAt: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authRefreshTokens_pk_columns_input: { refreshToken: { __type: "uuid!" } },
  authRefreshTokens_set_input: {
    createdAt: { __type: "timestamptz" },
    expiresAt: { __type: "timestamptz" },
    refreshToken: { __type: "uuid" },
    userId: { __type: "uuid" },
  },
  authRoles: {
    __typename: { __type: "String!" },
    role: { __type: "String!" },
    userRoles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    userRoles_aggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    usersByDefaultRole: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    usersByDefaultRole_aggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
  },
  authRoles_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authRoles_aggregate_fields" },
    nodes: { __type: "[authRoles!]!" },
  },
  authRoles_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[authRoles_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "authRoles_max_fields" },
    min: { __type: "authRoles_min_fields" },
  },
  authRoles_bool_exp: {
    _and: { __type: "[authRoles_bool_exp!]" },
    _not: { __type: "authRoles_bool_exp" },
    _or: { __type: "[authRoles_bool_exp!]" },
    role: { __type: "String_comparison_exp" },
    userRoles: { __type: "authUserRoles_bool_exp" },
    usersByDefaultRole: { __type: "users_bool_exp" },
  },
  authRoles_insert_input: {
    role: { __type: "String" },
    userRoles: { __type: "authUserRoles_arr_rel_insert_input" },
    usersByDefaultRole: { __type: "users_arr_rel_insert_input" },
  },
  authRoles_max_fields: {
    __typename: { __type: "String!" },
    role: { __type: "String" },
  },
  authRoles_min_fields: {
    __typename: { __type: "String!" },
    role: { __type: "String" },
  },
  authRoles_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authRoles!]!" },
  },
  authRoles_obj_rel_insert_input: {
    data: { __type: "authRoles_insert_input!" },
    on_conflict: { __type: "authRoles_on_conflict" },
  },
  authRoles_on_conflict: {
    constraint: { __type: "authRoles_constraint!" },
    update_columns: { __type: "[authRoles_update_column!]!" },
    where: { __type: "authRoles_bool_exp" },
  },
  authRoles_order_by: {
    role: { __type: "order_by" },
    userRoles_aggregate: { __type: "authUserRoles_aggregate_order_by" },
    usersByDefaultRole_aggregate: { __type: "users_aggregate_order_by" },
  },
  authRoles_pk_columns_input: { role: { __type: "String!" } },
  authRoles_set_input: { role: { __type: "String" } },
  authUserProviders: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    id: { __type: "uuid!" },
    provider: { __type: "authProviders!" },
    providerId: { __type: "String!" },
    providerUserId: { __type: "String!" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authUserProviders_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authUserProviders_aggregate_fields" },
    nodes: { __type: "[authUserProviders!]!" },
  },
  authUserProviders_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authUserProviders_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authUserProviders_max_fields" },
    min: { __type: "authUserProviders_min_fields" },
  },
  authUserProviders_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "authUserProviders_max_order_by" },
    min: { __type: "authUserProviders_min_order_by" },
  },
  authUserProviders_arr_rel_insert_input: {
    data: { __type: "[authUserProviders_insert_input!]!" },
    on_conflict: { __type: "authUserProviders_on_conflict" },
  },
  authUserProviders_bool_exp: {
    _and: { __type: "[authUserProviders_bool_exp!]" },
    _not: { __type: "authUserProviders_bool_exp" },
    _or: { __type: "[authUserProviders_bool_exp!]" },
    accessToken: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    provider: { __type: "authProviders_bool_exp" },
    providerId: { __type: "String_comparison_exp" },
    providerUserId: { __type: "String_comparison_exp" },
    refreshToken: { __type: "String_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authUserProviders_insert_input: {
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    provider: { __type: "authProviders_obj_rel_insert_input" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authUserProviders_max_fields: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserProviders_max_order_by: {
    accessToken: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    providerId: { __type: "order_by" },
    providerUserId: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserProviders_min_fields: {
    __typename: { __type: "String!" },
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserProviders_min_order_by: {
    accessToken: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    providerId: { __type: "order_by" },
    providerUserId: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserProviders_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authUserProviders!]!" },
  },
  authUserProviders_on_conflict: {
    constraint: { __type: "authUserProviders_constraint!" },
    update_columns: { __type: "[authUserProviders_update_column!]!" },
    where: { __type: "authUserProviders_bool_exp" },
  },
  authUserProviders_order_by: {
    accessToken: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    provider: { __type: "authProviders_order_by" },
    providerId: { __type: "order_by" },
    providerUserId: { __type: "order_by" },
    refreshToken: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authUserProviders_pk_columns_input: { id: { __type: "uuid!" } },
  authUserProviders_set_input: {
    accessToken: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    providerId: { __type: "String" },
    providerUserId: { __type: "String" },
    refreshToken: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  authUserRoles: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    id: { __type: "uuid!" },
    role: { __type: "String!" },
    roleByRole: { __type: "authRoles!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  authUserRoles_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "authUserRoles_aggregate_fields" },
    nodes: { __type: "[authUserRoles!]!" },
  },
  authUserRoles_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: {
        columns: "[authUserRoles_select_column!]",
        distinct: "Boolean",
      },
    },
    max: { __type: "authUserRoles_max_fields" },
    min: { __type: "authUserRoles_min_fields" },
  },
  authUserRoles_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "authUserRoles_max_order_by" },
    min: { __type: "authUserRoles_min_order_by" },
  },
  authUserRoles_arr_rel_insert_input: {
    data: { __type: "[authUserRoles_insert_input!]!" },
    on_conflict: { __type: "authUserRoles_on_conflict" },
  },
  authUserRoles_bool_exp: {
    _and: { __type: "[authUserRoles_bool_exp!]" },
    _not: { __type: "authUserRoles_bool_exp" },
    _or: { __type: "[authUserRoles_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    role: { __type: "String_comparison_exp" },
    roleByRole: { __type: "authRoles_bool_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  authUserRoles_insert_input: {
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    roleByRole: { __type: "authRoles_obj_rel_insert_input" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  authUserRoles_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserRoles_max_order_by: {
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    role: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserRoles_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  authUserRoles_min_order_by: {
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    role: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  authUserRoles_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[authUserRoles!]!" },
  },
  authUserRoles_on_conflict: {
    constraint: { __type: "authUserRoles_constraint!" },
    update_columns: { __type: "[authUserRoles_update_column!]!" },
    where: { __type: "authUserRoles_bool_exp" },
  },
  authUserRoles_order_by: {
    createdAt: { __type: "order_by" },
    id: { __type: "order_by" },
    role: { __type: "order_by" },
    roleByRole: { __type: "authRoles_order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  authUserRoles_pk_columns_input: { id: { __type: "uuid!" } },
  authUserRoles_set_input: {
    createdAt: { __type: "timestamptz" },
    id: { __type: "uuid" },
    role: { __type: "String" },
    userId: { __type: "uuid" },
  },
  buckets: {
    __typename: { __type: "String!" },
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz!" },
    downloadExpiration: { __type: "Int!" },
    files: {
      __type: "[files!]!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    files_aggregate: {
      __type: "files_aggregate!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    id: { __type: "String!" },
    maxUploadFileSize: { __type: "Int!" },
    minUploadFileSize: { __type: "Int!" },
    presignedUrlsEnabled: { __type: "Boolean!" },
    updatedAt: { __type: "timestamptz!" },
  },
  buckets_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "buckets_aggregate_fields" },
    nodes: { __type: "[buckets!]!" },
  },
  buckets_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "buckets_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[buckets_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "buckets_max_fields" },
    min: { __type: "buckets_min_fields" },
    stddev: { __type: "buckets_stddev_fields" },
    stddev_pop: { __type: "buckets_stddev_pop_fields" },
    stddev_samp: { __type: "buckets_stddev_samp_fields" },
    sum: { __type: "buckets_sum_fields" },
    var_pop: { __type: "buckets_var_pop_fields" },
    var_samp: { __type: "buckets_var_samp_fields" },
    variance: { __type: "buckets_variance_fields" },
  },
  buckets_avg_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_bool_exp: {
    _and: { __type: "[buckets_bool_exp!]" },
    _not: { __type: "buckets_bool_exp" },
    _or: { __type: "[buckets_bool_exp!]" },
    cacheControl: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    downloadExpiration: { __type: "Int_comparison_exp" },
    files: { __type: "files_bool_exp" },
    id: { __type: "String_comparison_exp" },
    maxUploadFileSize: { __type: "Int_comparison_exp" },
    minUploadFileSize: { __type: "Int_comparison_exp" },
    presignedUrlsEnabled: { __type: "Boolean_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
  },
  buckets_inc_input: {
    downloadExpiration: { __type: "Int" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
  },
  buckets_insert_input: {
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    files: { __type: "files_arr_rel_insert_input" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    presignedUrlsEnabled: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_max_fields: {
    __typename: { __type: "String!" },
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_min_fields: {
    __typename: { __type: "String!" },
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[buckets!]!" },
  },
  buckets_obj_rel_insert_input: {
    data: { __type: "buckets_insert_input!" },
    on_conflict: { __type: "buckets_on_conflict" },
  },
  buckets_on_conflict: {
    constraint: { __type: "buckets_constraint!" },
    update_columns: { __type: "[buckets_update_column!]!" },
    where: { __type: "buckets_bool_exp" },
  },
  buckets_order_by: {
    cacheControl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    downloadExpiration: { __type: "order_by" },
    files_aggregate: { __type: "files_aggregate_order_by" },
    id: { __type: "order_by" },
    maxUploadFileSize: { __type: "order_by" },
    minUploadFileSize: { __type: "order_by" },
    presignedUrlsEnabled: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  buckets_pk_columns_input: { id: { __type: "String!" } },
  buckets_set_input: {
    cacheControl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    downloadExpiration: { __type: "Int" },
    id: { __type: "String" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
    presignedUrlsEnabled: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  buckets_stddev_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_stddev_pop_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_stddev_samp_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_sum_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Int" },
    maxUploadFileSize: { __type: "Int" },
    minUploadFileSize: { __type: "Int" },
  },
  buckets_var_pop_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_var_samp_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  buckets_variance_fields: {
    __typename: { __type: "String!" },
    downloadExpiration: { __type: "Float" },
    maxUploadFileSize: { __type: "Float" },
    minUploadFileSize: { __type: "Float" },
  },
  citext_comparison_exp: {
    _eq: { __type: "citext" },
    _gt: { __type: "citext" },
    _gte: { __type: "citext" },
    _ilike: { __type: "citext" },
    _in: { __type: "[citext!]" },
    _iregex: { __type: "citext" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "citext" },
    _lt: { __type: "citext" },
    _lte: { __type: "citext" },
    _neq: { __type: "citext" },
    _nilike: { __type: "citext" },
    _nin: { __type: "[citext!]" },
    _niregex: { __type: "citext" },
    _nlike: { __type: "citext" },
    _nregex: { __type: "citext" },
    _nsimilar: { __type: "citext" },
    _regex: { __type: "citext" },
    _similar: { __type: "citext" },
  },
  doc_links: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    doc: { __type: "docs!" },
    docId: { __type: "uuid!" },
    docVisits: {
      __type: "[doc_visits!]!",
      __args: {
        distinct_on: "[doc_visits_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_visits_order_by!]",
        where: "doc_visits_bool_exp",
      },
    },
    docVisits_aggregate: {
      __type: "doc_visits_aggregate!",
      __args: {
        distinct_on: "[doc_visits_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_visits_order_by!]",
        where: "doc_visits_bool_exp",
      },
    },
    downloadAllowed: { __type: "Boolean!" },
    id: { __type: "uuid!" },
    isActive: { __type: "Boolean!" },
    passcode: { __type: "String" },
    requireEmailToView: { __type: "Boolean!" },
    updatedAt: { __type: "timestamptz!" },
  },
  doc_links_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "doc_links_aggregate_fields" },
    nodes: { __type: "[doc_links!]!" },
  },
  doc_links_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[doc_links_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "doc_links_max_fields" },
    min: { __type: "doc_links_min_fields" },
  },
  doc_links_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "doc_links_max_order_by" },
    min: { __type: "doc_links_min_order_by" },
  },
  doc_links_arr_rel_insert_input: {
    data: { __type: "[doc_links_insert_input!]!" },
    on_conflict: { __type: "doc_links_on_conflict" },
  },
  doc_links_bool_exp: {
    _and: { __type: "[doc_links_bool_exp!]" },
    _not: { __type: "doc_links_bool_exp" },
    _or: { __type: "[doc_links_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    doc: { __type: "docs_bool_exp" },
    docId: { __type: "uuid_comparison_exp" },
    docVisits: { __type: "doc_visits_bool_exp" },
    downloadAllowed: { __type: "Boolean_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    isActive: { __type: "Boolean_comparison_exp" },
    passcode: { __type: "String_comparison_exp" },
    requireEmailToView: { __type: "Boolean_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
  },
  doc_links_insert_input: {
    createdAt: { __type: "timestamptz" },
    doc: { __type: "docs_obj_rel_insert_input" },
    docId: { __type: "uuid" },
    docVisits: { __type: "doc_visits_arr_rel_insert_input" },
    downloadAllowed: { __type: "Boolean" },
    id: { __type: "uuid" },
    isActive: { __type: "Boolean" },
    passcode: { __type: "String" },
    requireEmailToView: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_links_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    docId: { __type: "uuid" },
    id: { __type: "uuid" },
    passcode: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_links_max_order_by: {
    createdAt: { __type: "order_by" },
    docId: { __type: "order_by" },
    id: { __type: "order_by" },
    passcode: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  doc_links_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    docId: { __type: "uuid" },
    id: { __type: "uuid" },
    passcode: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_links_min_order_by: {
    createdAt: { __type: "order_by" },
    docId: { __type: "order_by" },
    id: { __type: "order_by" },
    passcode: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  doc_links_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[doc_links!]!" },
  },
  doc_links_obj_rel_insert_input: {
    data: { __type: "doc_links_insert_input!" },
    on_conflict: { __type: "doc_links_on_conflict" },
  },
  doc_links_on_conflict: {
    constraint: { __type: "doc_links_constraint!" },
    update_columns: { __type: "[doc_links_update_column!]!" },
    where: { __type: "doc_links_bool_exp" },
  },
  doc_links_order_by: {
    createdAt: { __type: "order_by" },
    doc: { __type: "docs_order_by" },
    docId: { __type: "order_by" },
    docVisits_aggregate: { __type: "doc_visits_aggregate_order_by" },
    downloadAllowed: { __type: "order_by" },
    id: { __type: "order_by" },
    isActive: { __type: "order_by" },
    passcode: { __type: "order_by" },
    requireEmailToView: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  doc_links_pk_columns_input: { id: { __type: "uuid!" } },
  doc_links_set_input: {
    createdAt: { __type: "timestamptz" },
    docId: { __type: "uuid" },
    downloadAllowed: { __type: "Boolean" },
    id: { __type: "uuid" },
    isActive: { __type: "Boolean" },
    passcode: { __type: "String" },
    requireEmailToView: { __type: "Boolean" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_visits: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    docLink: { __type: "doc_links!" },
    docLinkId: { __type: "uuid!" },
    email: { __type: "String" },
    id: { __type: "uuid!" },
    updatedAt: { __type: "timestamptz!" },
  },
  doc_visits_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "doc_visits_aggregate_fields" },
    nodes: { __type: "[doc_visits!]!" },
  },
  doc_visits_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[doc_visits_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "doc_visits_max_fields" },
    min: { __type: "doc_visits_min_fields" },
  },
  doc_visits_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "doc_visits_max_order_by" },
    min: { __type: "doc_visits_min_order_by" },
  },
  doc_visits_arr_rel_insert_input: {
    data: { __type: "[doc_visits_insert_input!]!" },
    on_conflict: { __type: "doc_visits_on_conflict" },
  },
  doc_visits_bool_exp: {
    _and: { __type: "[doc_visits_bool_exp!]" },
    _not: { __type: "doc_visits_bool_exp" },
    _or: { __type: "[doc_visits_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    docLink: { __type: "doc_links_bool_exp" },
    docLinkId: { __type: "uuid_comparison_exp" },
    email: { __type: "String_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
  },
  doc_visits_insert_input: {
    createdAt: { __type: "timestamptz" },
    docLink: { __type: "doc_links_obj_rel_insert_input" },
    docLinkId: { __type: "uuid" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_visits_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    docLinkId: { __type: "uuid" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_visits_max_order_by: {
    createdAt: { __type: "order_by" },
    docLinkId: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  doc_visits_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    docLinkId: { __type: "uuid" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    updatedAt: { __type: "timestamptz" },
  },
  doc_visits_min_order_by: {
    createdAt: { __type: "order_by" },
    docLinkId: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  doc_visits_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[doc_visits!]!" },
  },
  doc_visits_on_conflict: {
    constraint: { __type: "doc_visits_constraint!" },
    update_columns: { __type: "[doc_visits_update_column!]!" },
    where: { __type: "doc_visits_bool_exp" },
  },
  doc_visits_order_by: {
    createdAt: { __type: "order_by" },
    docLink: { __type: "doc_links_order_by" },
    docLinkId: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  doc_visits_pk_columns_input: { id: { __type: "uuid!" } },
  doc_visits_set_input: {
    createdAt: { __type: "timestamptz" },
    docLinkId: { __type: "uuid" },
    email: { __type: "String" },
    id: { __type: "uuid" },
    updatedAt: { __type: "timestamptz" },
  },
  docs: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    docLinks: {
      __type: "[doc_links!]!",
      __args: {
        distinct_on: "[doc_links_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_links_order_by!]",
        where: "doc_links_bool_exp",
      },
    },
    docLinks_aggregate: {
      __type: "doc_links_aggregate!",
      __args: {
        distinct_on: "[doc_links_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_links_order_by!]",
        where: "doc_links_bool_exp",
      },
    },
    file: { __type: "files!" },
    fileId: { __type: "uuid!" },
    id: { __type: "uuid!" },
    name: { __type: "String!" },
    updatedAt: { __type: "timestamptz!" },
    user: { __type: "users!" },
    userId: { __type: "uuid!" },
  },
  docs_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "docs_aggregate_fields" },
    nodes: { __type: "[docs!]!" },
  },
  docs_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[docs_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "docs_max_fields" },
    min: { __type: "docs_min_fields" },
  },
  docs_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "docs_max_order_by" },
    min: { __type: "docs_min_order_by" },
  },
  docs_arr_rel_insert_input: {
    data: { __type: "[docs_insert_input!]!" },
    on_conflict: { __type: "docs_on_conflict" },
  },
  docs_bool_exp: {
    _and: { __type: "[docs_bool_exp!]" },
    _not: { __type: "docs_bool_exp" },
    _or: { __type: "[docs_bool_exp!]" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    docLinks: { __type: "doc_links_bool_exp" },
    file: { __type: "files_bool_exp" },
    fileId: { __type: "uuid_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    name: { __type: "String_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    user: { __type: "users_bool_exp" },
    userId: { __type: "uuid_comparison_exp" },
  },
  docs_insert_input: {
    createdAt: { __type: "timestamptz" },
    docLinks: { __type: "doc_links_arr_rel_insert_input" },
    file: { __type: "files_obj_rel_insert_input" },
    fileId: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    user: { __type: "users_obj_rel_insert_input" },
    userId: { __type: "uuid" },
  },
  docs_max_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    fileId: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  docs_max_order_by: {
    createdAt: { __type: "order_by" },
    fileId: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  docs_min_fields: {
    __typename: { __type: "String!" },
    createdAt: { __type: "timestamptz" },
    fileId: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  docs_min_order_by: {
    createdAt: { __type: "order_by" },
    fileId: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userId: { __type: "order_by" },
  },
  docs_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[docs!]!" },
  },
  docs_obj_rel_insert_input: {
    data: { __type: "docs_insert_input!" },
    on_conflict: { __type: "docs_on_conflict" },
  },
  docs_on_conflict: {
    constraint: { __type: "docs_constraint!" },
    update_columns: { __type: "[docs_update_column!]!" },
    where: { __type: "docs_bool_exp" },
  },
  docs_order_by: {
    createdAt: { __type: "order_by" },
    docLinks_aggregate: { __type: "doc_links_aggregate_order_by" },
    file: { __type: "files_order_by" },
    fileId: { __type: "order_by" },
    id: { __type: "order_by" },
    name: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    user: { __type: "users_order_by" },
    userId: { __type: "order_by" },
  },
  docs_pk_columns_input: { id: { __type: "uuid!" } },
  docs_set_input: {
    createdAt: { __type: "timestamptz" },
    fileId: { __type: "uuid" },
    id: { __type: "uuid" },
    name: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userId: { __type: "uuid" },
  },
  files: {
    __typename: { __type: "String!" },
    bucket: { __type: "buckets!" },
    bucketId: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    docs: {
      __type: "[docs!]!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    docs_aggregate: {
      __type: "docs_aggregate!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    etag: { __type: "String" },
    id: { __type: "uuid!" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz!" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "files_aggregate_fields" },
    nodes: { __type: "[files!]!" },
  },
  files_aggregate_fields: {
    __typename: { __type: "String!" },
    avg: { __type: "files_avg_fields" },
    count: {
      __type: "Int!",
      __args: { columns: "[files_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "files_max_fields" },
    min: { __type: "files_min_fields" },
    stddev: { __type: "files_stddev_fields" },
    stddev_pop: { __type: "files_stddev_pop_fields" },
    stddev_samp: { __type: "files_stddev_samp_fields" },
    sum: { __type: "files_sum_fields" },
    var_pop: { __type: "files_var_pop_fields" },
    var_samp: { __type: "files_var_samp_fields" },
    variance: { __type: "files_variance_fields" },
  },
  files_aggregate_order_by: {
    avg: { __type: "files_avg_order_by" },
    count: { __type: "order_by" },
    max: { __type: "files_max_order_by" },
    min: { __type: "files_min_order_by" },
    stddev: { __type: "files_stddev_order_by" },
    stddev_pop: { __type: "files_stddev_pop_order_by" },
    stddev_samp: { __type: "files_stddev_samp_order_by" },
    sum: { __type: "files_sum_order_by" },
    var_pop: { __type: "files_var_pop_order_by" },
    var_samp: { __type: "files_var_samp_order_by" },
    variance: { __type: "files_variance_order_by" },
  },
  files_arr_rel_insert_input: {
    data: { __type: "[files_insert_input!]!" },
    on_conflict: { __type: "files_on_conflict" },
  },
  files_avg_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_avg_order_by: { size: { __type: "order_by" } },
  files_bool_exp: {
    _and: { __type: "[files_bool_exp!]" },
    _not: { __type: "files_bool_exp" },
    _or: { __type: "[files_bool_exp!]" },
    bucket: { __type: "buckets_bool_exp" },
    bucketId: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    docs: { __type: "docs_bool_exp" },
    etag: { __type: "String_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    isUploaded: { __type: "Boolean_comparison_exp" },
    mimeType: { __type: "String_comparison_exp" },
    name: { __type: "String_comparison_exp" },
    size: { __type: "Int_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    uploadedByUserId: { __type: "uuid_comparison_exp" },
  },
  files_inc_input: { size: { __type: "Int" } },
  files_insert_input: {
    bucket: { __type: "buckets_obj_rel_insert_input" },
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    docs: { __type: "docs_arr_rel_insert_input" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_max_fields: {
    __typename: { __type: "String!" },
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_max_order_by: {
    bucketId: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    etag: { __type: "order_by" },
    id: { __type: "order_by" },
    mimeType: { __type: "order_by" },
    name: { __type: "order_by" },
    size: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    uploadedByUserId: { __type: "order_by" },
  },
  files_min_fields: {
    __typename: { __type: "String!" },
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_min_order_by: {
    bucketId: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    etag: { __type: "order_by" },
    id: { __type: "order_by" },
    mimeType: { __type: "order_by" },
    name: { __type: "order_by" },
    size: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    uploadedByUserId: { __type: "order_by" },
  },
  files_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[files!]!" },
  },
  files_obj_rel_insert_input: {
    data: { __type: "files_insert_input!" },
    on_conflict: { __type: "files_on_conflict" },
  },
  files_on_conflict: {
    constraint: { __type: "files_constraint!" },
    update_columns: { __type: "[files_update_column!]!" },
    where: { __type: "files_bool_exp" },
  },
  files_order_by: {
    bucket: { __type: "buckets_order_by" },
    bucketId: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    docs_aggregate: { __type: "docs_aggregate_order_by" },
    etag: { __type: "order_by" },
    id: { __type: "order_by" },
    isUploaded: { __type: "order_by" },
    mimeType: { __type: "order_by" },
    name: { __type: "order_by" },
    size: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    uploadedByUserId: { __type: "order_by" },
  },
  files_pk_columns_input: { id: { __type: "uuid!" } },
  files_set_input: {
    bucketId: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    etag: { __type: "String" },
    id: { __type: "uuid" },
    isUploaded: { __type: "Boolean" },
    mimeType: { __type: "String" },
    name: { __type: "String" },
    size: { __type: "Int" },
    updatedAt: { __type: "timestamptz" },
    uploadedByUserId: { __type: "uuid" },
  },
  files_stddev_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_stddev_order_by: { size: { __type: "order_by" } },
  files_stddev_pop_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_stddev_pop_order_by: { size: { __type: "order_by" } },
  files_stddev_samp_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_stddev_samp_order_by: { size: { __type: "order_by" } },
  files_sum_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Int" },
  },
  files_sum_order_by: { size: { __type: "order_by" } },
  files_var_pop_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_var_pop_order_by: { size: { __type: "order_by" } },
  files_var_samp_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_var_samp_order_by: { size: { __type: "order_by" } },
  files_variance_fields: {
    __typename: { __type: "String!" },
    size: { __type: "Float" },
  },
  files_variance_order_by: { size: { __type: "order_by" } },
  mutation: {
    __typename: { __type: "String!" },
    DeleteDoc: { __type: "docs", __args: { id: "uuid!" } },
    deleteAuthProvider: { __type: "authProviders", __args: { id: "String!" } },
    deleteAuthProviderRequest: {
      __type: "authProviderRequests",
      __args: { id: "uuid!" },
    },
    deleteAuthProviderRequests: {
      __type: "authProviderRequests_mutation_response",
      __args: { where: "authProviderRequests_bool_exp!" },
    },
    deleteAuthProviders: {
      __type: "authProviders_mutation_response",
      __args: { where: "authProviders_bool_exp!" },
    },
    deleteAuthRefreshToken: {
      __type: "authRefreshTokens",
      __args: { refreshToken: "uuid!" },
    },
    deleteAuthRefreshTokens: {
      __type: "authRefreshTokens_mutation_response",
      __args: { where: "authRefreshTokens_bool_exp!" },
    },
    deleteAuthRole: { __type: "authRoles", __args: { role: "String!" } },
    deleteAuthRoles: {
      __type: "authRoles_mutation_response",
      __args: { where: "authRoles_bool_exp!" },
    },
    deleteAuthUserProvider: {
      __type: "authUserProviders",
      __args: { id: "uuid!" },
    },
    deleteAuthUserProviders: {
      __type: "authUserProviders_mutation_response",
      __args: { where: "authUserProviders_bool_exp!" },
    },
    deleteAuthUserRole: { __type: "authUserRoles", __args: { id: "uuid!" } },
    deleteAuthUserRoles: {
      __type: "authUserRoles_mutation_response",
      __args: { where: "authUserRoles_bool_exp!" },
    },
    deleteBucket: { __type: "buckets", __args: { id: "String!" } },
    deleteBuckets: {
      __type: "buckets_mutation_response",
      __args: { where: "buckets_bool_exp!" },
    },
    deleteDocs: {
      __type: "docs_mutation_response",
      __args: { where: "docs_bool_exp!" },
    },
    deleteFile: { __type: "files", __args: { id: "uuid!" } },
    deleteFiles: {
      __type: "files_mutation_response",
      __args: { where: "files_bool_exp!" },
    },
    deleteUser: { __type: "users", __args: { id: "uuid!" } },
    deleteUsers: {
      __type: "users_mutation_response",
      __args: { where: "users_bool_exp!" },
    },
    delete_doc_links: {
      __type: "doc_links_mutation_response",
      __args: { where: "doc_links_bool_exp!" },
    },
    delete_doc_links_by_pk: { __type: "doc_links", __args: { id: "uuid!" } },
    delete_doc_visits: {
      __type: "doc_visits_mutation_response",
      __args: { where: "doc_visits_bool_exp!" },
    },
    delete_doc_visits_by_pk: { __type: "doc_visits", __args: { id: "uuid!" } },
    insertAuthProvider: {
      __type: "authProviders",
      __args: {
        object: "authProviders_insert_input!",
        on_conflict: "authProviders_on_conflict",
      },
    },
    insertAuthProviderRequest: {
      __type: "authProviderRequests",
      __args: {
        object: "authProviderRequests_insert_input!",
        on_conflict: "authProviderRequests_on_conflict",
      },
    },
    insertAuthProviderRequests: {
      __type: "authProviderRequests_mutation_response",
      __args: {
        objects: "[authProviderRequests_insert_input!]!",
        on_conflict: "authProviderRequests_on_conflict",
      },
    },
    insertAuthProviders: {
      __type: "authProviders_mutation_response",
      __args: {
        objects: "[authProviders_insert_input!]!",
        on_conflict: "authProviders_on_conflict",
      },
    },
    insertAuthRefreshToken: {
      __type: "authRefreshTokens",
      __args: {
        object: "authRefreshTokens_insert_input!",
        on_conflict: "authRefreshTokens_on_conflict",
      },
    },
    insertAuthRefreshTokens: {
      __type: "authRefreshTokens_mutation_response",
      __args: {
        objects: "[authRefreshTokens_insert_input!]!",
        on_conflict: "authRefreshTokens_on_conflict",
      },
    },
    insertAuthRole: {
      __type: "authRoles",
      __args: {
        object: "authRoles_insert_input!",
        on_conflict: "authRoles_on_conflict",
      },
    },
    insertAuthRoles: {
      __type: "authRoles_mutation_response",
      __args: {
        objects: "[authRoles_insert_input!]!",
        on_conflict: "authRoles_on_conflict",
      },
    },
    insertAuthUserProvider: {
      __type: "authUserProviders",
      __args: {
        object: "authUserProviders_insert_input!",
        on_conflict: "authUserProviders_on_conflict",
      },
    },
    insertAuthUserProviders: {
      __type: "authUserProviders_mutation_response",
      __args: {
        objects: "[authUserProviders_insert_input!]!",
        on_conflict: "authUserProviders_on_conflict",
      },
    },
    insertAuthUserRole: {
      __type: "authUserRoles",
      __args: {
        object: "authUserRoles_insert_input!",
        on_conflict: "authUserRoles_on_conflict",
      },
    },
    insertAuthUserRoles: {
      __type: "authUserRoles_mutation_response",
      __args: {
        objects: "[authUserRoles_insert_input!]!",
        on_conflict: "authUserRoles_on_conflict",
      },
    },
    insertBucket: {
      __type: "buckets",
      __args: {
        object: "buckets_insert_input!",
        on_conflict: "buckets_on_conflict",
      },
    },
    insertBuckets: {
      __type: "buckets_mutation_response",
      __args: {
        objects: "[buckets_insert_input!]!",
        on_conflict: "buckets_on_conflict",
      },
    },
    insertDoc: {
      __type: "docs",
      __args: { object: "docs_insert_input!", on_conflict: "docs_on_conflict" },
    },
    insertDocLink: {
      __type: "doc_links",
      __args: {
        object: "doc_links_insert_input!",
        on_conflict: "doc_links_on_conflict",
      },
    },
    insertDocLinks: {
      __type: "doc_links_mutation_response",
      __args: {
        objects: "[doc_links_insert_input!]!",
        on_conflict: "doc_links_on_conflict",
      },
    },
    insertDocs: {
      __type: "docs_mutation_response",
      __args: {
        objects: "[docs_insert_input!]!",
        on_conflict: "docs_on_conflict",
      },
    },
    insertFile: {
      __type: "files",
      __args: {
        object: "files_insert_input!",
        on_conflict: "files_on_conflict",
      },
    },
    insertFiles: {
      __type: "files_mutation_response",
      __args: {
        objects: "[files_insert_input!]!",
        on_conflict: "files_on_conflict",
      },
    },
    insertUser: {
      __type: "users",
      __args: {
        object: "users_insert_input!",
        on_conflict: "users_on_conflict",
      },
    },
    insertUsers: {
      __type: "users_mutation_response",
      __args: {
        objects: "[users_insert_input!]!",
        on_conflict: "users_on_conflict",
      },
    },
    insert_doc_visits: {
      __type: "doc_visits_mutation_response",
      __args: {
        objects: "[doc_visits_insert_input!]!",
        on_conflict: "doc_visits_on_conflict",
      },
    },
    insert_doc_visits_one: {
      __type: "doc_visits",
      __args: {
        object: "doc_visits_insert_input!",
        on_conflict: "doc_visits_on_conflict",
      },
    },
    updateAuthProvider: {
      __type: "authProviders",
      __args: {
        _set: "authProviders_set_input",
        pk_columns: "authProviders_pk_columns_input!",
      },
    },
    updateAuthProviderRequest: {
      __type: "authProviderRequests",
      __args: {
        _set: "authProviderRequests_set_input",
        pk_columns: "authProviderRequests_pk_columns_input!",
      },
    },
    updateAuthProviderRequests: {
      __type: "authProviderRequests_mutation_response",
      __args: {
        _set: "authProviderRequests_set_input",
        where: "authProviderRequests_bool_exp!",
      },
    },
    updateAuthProviders: {
      __type: "authProviders_mutation_response",
      __args: {
        _set: "authProviders_set_input",
        where: "authProviders_bool_exp!",
      },
    },
    updateAuthRefreshToken: {
      __type: "authRefreshTokens",
      __args: {
        _set: "authRefreshTokens_set_input",
        pk_columns: "authRefreshTokens_pk_columns_input!",
      },
    },
    updateAuthRefreshTokens: {
      __type: "authRefreshTokens_mutation_response",
      __args: {
        _set: "authRefreshTokens_set_input",
        where: "authRefreshTokens_bool_exp!",
      },
    },
    updateAuthRole: {
      __type: "authRoles",
      __args: {
        _set: "authRoles_set_input",
        pk_columns: "authRoles_pk_columns_input!",
      },
    },
    updateAuthRoles: {
      __type: "authRoles_mutation_response",
      __args: { _set: "authRoles_set_input", where: "authRoles_bool_exp!" },
    },
    updateAuthUserProvider: {
      __type: "authUserProviders",
      __args: {
        _set: "authUserProviders_set_input",
        pk_columns: "authUserProviders_pk_columns_input!",
      },
    },
    updateAuthUserProviders: {
      __type: "authUserProviders_mutation_response",
      __args: {
        _set: "authUserProviders_set_input",
        where: "authUserProviders_bool_exp!",
      },
    },
    updateAuthUserRole: {
      __type: "authUserRoles",
      __args: {
        _set: "authUserRoles_set_input",
        pk_columns: "authUserRoles_pk_columns_input!",
      },
    },
    updateAuthUserRoles: {
      __type: "authUserRoles_mutation_response",
      __args: {
        _set: "authUserRoles_set_input",
        where: "authUserRoles_bool_exp!",
      },
    },
    updateBucket: {
      __type: "buckets",
      __args: {
        _inc: "buckets_inc_input",
        _set: "buckets_set_input",
        pk_columns: "buckets_pk_columns_input!",
      },
    },
    updateBuckets: {
      __type: "buckets_mutation_response",
      __args: {
        _inc: "buckets_inc_input",
        _set: "buckets_set_input",
        where: "buckets_bool_exp!",
      },
    },
    updateDoc: {
      __type: "docs",
      __args: { _set: "docs_set_input", pk_columns: "docs_pk_columns_input!" },
    },
    updateDocs: {
      __type: "docs_mutation_response",
      __args: { _set: "docs_set_input", where: "docs_bool_exp!" },
    },
    updateFile: {
      __type: "files",
      __args: {
        _inc: "files_inc_input",
        _set: "files_set_input",
        pk_columns: "files_pk_columns_input!",
      },
    },
    updateFiles: {
      __type: "files_mutation_response",
      __args: {
        _inc: "files_inc_input",
        _set: "files_set_input",
        where: "files_bool_exp!",
      },
    },
    updateUser: {
      __type: "users",
      __args: {
        _set: "users_set_input",
        pk_columns: "users_pk_columns_input!",
      },
    },
    updateUsers: {
      __type: "users_mutation_response",
      __args: { _set: "users_set_input", where: "users_bool_exp!" },
    },
    update_doc_links: {
      __type: "doc_links_mutation_response",
      __args: { _set: "doc_links_set_input", where: "doc_links_bool_exp!" },
    },
    update_doc_links_by_pk: {
      __type: "doc_links",
      __args: {
        _set: "doc_links_set_input",
        pk_columns: "doc_links_pk_columns_input!",
      },
    },
    update_doc_visits: {
      __type: "doc_visits_mutation_response",
      __args: { _set: "doc_visits_set_input", where: "doc_visits_bool_exp!" },
    },
    update_doc_visits_by_pk: {
      __type: "doc_visits",
      __args: {
        _set: "doc_visits_set_input",
        pk_columns: "doc_visits_pk_columns_input!",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    authProvider: { __type: "authProviders", __args: { id: "String!" } },
    authProviderRequest: {
      __type: "authProviderRequests",
      __args: { id: "uuid!" },
    },
    authProviderRequests: {
      __type: "[authProviderRequests!]!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviderRequestsAggregate: {
      __type: "authProviderRequests_aggregate!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviders: {
      __type: "[authProviders!]!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authProvidersAggregate: {
      __type: "authProviders_aggregate!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authRefreshToken: {
      __type: "authRefreshTokens",
      __args: { refreshToken: "uuid!" },
    },
    authRefreshTokens: {
      __type: "[authRefreshTokens!]!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRefreshTokensAggregate: {
      __type: "authRefreshTokens_aggregate!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRole: { __type: "authRoles", __args: { role: "String!" } },
    authRoles: {
      __type: "[authRoles!]!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authRolesAggregate: {
      __type: "authRoles_aggregate!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authUserProvider: { __type: "authUserProviders", __args: { id: "uuid!" } },
    authUserProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserProvidersAggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserRole: { __type: "authUserRoles", __args: { id: "uuid!" } },
    authUserRoles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserRolesAggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    bucket: { __type: "buckets", __args: { id: "String!" } },
    buckets: {
      __type: "[buckets!]!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    bucketsAggregate: {
      __type: "buckets_aggregate!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    doc: { __type: "docs", __args: { id: "uuid!" } },
    docLink: { __type: "doc_links", __args: { id: "uuid!" } },
    docLinks: {
      __type: "[doc_links!]!",
      __args: {
        distinct_on: "[doc_links_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_links_order_by!]",
        where: "doc_links_bool_exp",
      },
    },
    doc_links_aggregate: {
      __type: "doc_links_aggregate!",
      __args: {
        distinct_on: "[doc_links_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_links_order_by!]",
        where: "doc_links_bool_exp",
      },
    },
    doc_visits: {
      __type: "[doc_visits!]!",
      __args: {
        distinct_on: "[doc_visits_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_visits_order_by!]",
        where: "doc_visits_bool_exp",
      },
    },
    doc_visits_aggregate: {
      __type: "doc_visits_aggregate!",
      __args: {
        distinct_on: "[doc_visits_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_visits_order_by!]",
        where: "doc_visits_bool_exp",
      },
    },
    doc_visits_by_pk: { __type: "doc_visits", __args: { id: "uuid!" } },
    docs: {
      __type: "[docs!]!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    docsAggregate: {
      __type: "docs_aggregate!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    file: { __type: "files", __args: { id: "uuid!" } },
    files: {
      __type: "[files!]!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    filesAggregate: {
      __type: "files_aggregate!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    user: { __type: "users", __args: { id: "uuid!" } },
    userAggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    authProvider: { __type: "authProviders", __args: { id: "String!" } },
    authProviderRequest: {
      __type: "authProviderRequests",
      __args: { id: "uuid!" },
    },
    authProviderRequests: {
      __type: "[authProviderRequests!]!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviderRequestsAggregate: {
      __type: "authProviderRequests_aggregate!",
      __args: {
        distinct_on: "[authProviderRequests_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviderRequests_order_by!]",
        where: "authProviderRequests_bool_exp",
      },
    },
    authProviders: {
      __type: "[authProviders!]!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authProvidersAggregate: {
      __type: "authProviders_aggregate!",
      __args: {
        distinct_on: "[authProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authProviders_order_by!]",
        where: "authProviders_bool_exp",
      },
    },
    authRefreshToken: {
      __type: "authRefreshTokens",
      __args: { refreshToken: "uuid!" },
    },
    authRefreshTokens: {
      __type: "[authRefreshTokens!]!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRefreshTokensAggregate: {
      __type: "authRefreshTokens_aggregate!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    authRole: { __type: "authRoles", __args: { role: "String!" } },
    authRoles: {
      __type: "[authRoles!]!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authRolesAggregate: {
      __type: "authRoles_aggregate!",
      __args: {
        distinct_on: "[authRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRoles_order_by!]",
        where: "authRoles_bool_exp",
      },
    },
    authUserProvider: { __type: "authUserProviders", __args: { id: "uuid!" } },
    authUserProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserProvidersAggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    authUserRole: { __type: "authUserRoles", __args: { id: "uuid!" } },
    authUserRoles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    authUserRolesAggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    bucket: { __type: "buckets", __args: { id: "String!" } },
    buckets: {
      __type: "[buckets!]!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    bucketsAggregate: {
      __type: "buckets_aggregate!",
      __args: {
        distinct_on: "[buckets_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[buckets_order_by!]",
        where: "buckets_bool_exp",
      },
    },
    doc: { __type: "docs", __args: { id: "uuid!" } },
    docLink: { __type: "doc_links", __args: { id: "uuid!" } },
    docLinks: {
      __type: "[doc_links!]!",
      __args: {
        distinct_on: "[doc_links_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_links_order_by!]",
        where: "doc_links_bool_exp",
      },
    },
    doc_links_aggregate: {
      __type: "doc_links_aggregate!",
      __args: {
        distinct_on: "[doc_links_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_links_order_by!]",
        where: "doc_links_bool_exp",
      },
    },
    doc_visits: {
      __type: "[doc_visits!]!",
      __args: {
        distinct_on: "[doc_visits_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_visits_order_by!]",
        where: "doc_visits_bool_exp",
      },
    },
    doc_visits_aggregate: {
      __type: "doc_visits_aggregate!",
      __args: {
        distinct_on: "[doc_visits_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[doc_visits_order_by!]",
        where: "doc_visits_bool_exp",
      },
    },
    doc_visits_by_pk: { __type: "doc_visits", __args: { id: "uuid!" } },
    docs: {
      __type: "[docs!]!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    docsAggregate: {
      __type: "docs_aggregate!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    file: { __type: "files", __args: { id: "uuid!" } },
    files: {
      __type: "[files!]!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    filesAggregate: {
      __type: "files_aggregate!",
      __args: {
        distinct_on: "[files_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[files_order_by!]",
        where: "files_bool_exp",
      },
    },
    user: { __type: "users", __args: { id: "uuid!" } },
    userAggregate: {
      __type: "users_aggregate!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
    users: {
      __type: "[users!]!",
      __args: {
        distinct_on: "[users_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[users_order_by!]",
        where: "users_bool_exp",
      },
    },
  },
  timestamptz_comparison_exp: {
    _eq: { __type: "timestamptz" },
    _gt: { __type: "timestamptz" },
    _gte: { __type: "timestamptz" },
    _in: { __type: "[timestamptz!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "timestamptz" },
    _lte: { __type: "timestamptz" },
    _neq: { __type: "timestamptz" },
    _nin: { __type: "[timestamptz!]" },
  },
  users: {
    __typename: { __type: "String!" },
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String!" },
    createdAt: { __type: "timestamptz!" },
    defaultRole: { __type: "String!" },
    defaultRoleByRole: { __type: "authRoles!" },
    disabled: { __type: "Boolean!" },
    displayName: { __type: "String!" },
    docs: {
      __type: "[docs!]!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    docs_aggregate: {
      __type: "docs_aggregate!",
      __args: {
        distinct_on: "[docs_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[docs_order_by!]",
        where: "docs_bool_exp",
      },
    },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean!" },
    id: { __type: "uuid!" },
    isAnonymous: { __type: "Boolean!" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String!" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz!" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean!" },
    refreshTokens: {
      __type: "[authRefreshTokens!]!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    refreshTokens_aggregate: {
      __type: "authRefreshTokens_aggregate!",
      __args: {
        distinct_on: "[authRefreshTokens_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authRefreshTokens_order_by!]",
        where: "authRefreshTokens_bool_exp",
      },
    },
    roles: {
      __type: "[authUserRoles!]!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    roles_aggregate: {
      __type: "authUserRoles_aggregate!",
      __args: {
        distinct_on: "[authUserRoles_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserRoles_order_by!]",
        where: "authUserRoles_bool_exp",
      },
    },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz!" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz!" },
    userProviders: {
      __type: "[authUserProviders!]!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
    userProviders_aggregate: {
      __type: "authUserProviders_aggregate!",
      __args: {
        distinct_on: "[authUserProviders_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[authUserProviders_order_by!]",
        where: "authUserProviders_bool_exp",
      },
    },
  },
  users_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "users_aggregate_fields" },
    nodes: { __type: "[users!]!" },
  },
  users_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[users_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "users_max_fields" },
    min: { __type: "users_min_fields" },
  },
  users_aggregate_order_by: {
    count: { __type: "order_by" },
    max: { __type: "users_max_order_by" },
    min: { __type: "users_min_order_by" },
  },
  users_arr_rel_insert_input: {
    data: { __type: "[users_insert_input!]!" },
    on_conflict: { __type: "users_on_conflict" },
  },
  users_bool_exp: {
    _and: { __type: "[users_bool_exp!]" },
    _not: { __type: "users_bool_exp" },
    _or: { __type: "[users_bool_exp!]" },
    activeMfaType: { __type: "String_comparison_exp" },
    avatarUrl: { __type: "String_comparison_exp" },
    createdAt: { __type: "timestamptz_comparison_exp" },
    defaultRole: { __type: "String_comparison_exp" },
    defaultRoleByRole: { __type: "authRoles_bool_exp" },
    disabled: { __type: "Boolean_comparison_exp" },
    displayName: { __type: "String_comparison_exp" },
    docs: { __type: "docs_bool_exp" },
    email: { __type: "citext_comparison_exp" },
    emailVerified: { __type: "Boolean_comparison_exp" },
    id: { __type: "uuid_comparison_exp" },
    isAnonymous: { __type: "Boolean_comparison_exp" },
    lastSeen: { __type: "timestamptz_comparison_exp" },
    locale: { __type: "String_comparison_exp" },
    newEmail: { __type: "citext_comparison_exp" },
    otpHash: { __type: "String_comparison_exp" },
    otpHashExpiresAt: { __type: "timestamptz_comparison_exp" },
    otpMethodLastUsed: { __type: "String_comparison_exp" },
    passwordHash: { __type: "String_comparison_exp" },
    phoneNumber: { __type: "String_comparison_exp" },
    phoneNumberVerified: { __type: "Boolean_comparison_exp" },
    refreshTokens: { __type: "authRefreshTokens_bool_exp" },
    roles: { __type: "authUserRoles_bool_exp" },
    ticket: { __type: "String_comparison_exp" },
    ticketExpiresAt: { __type: "timestamptz_comparison_exp" },
    totpSecret: { __type: "String_comparison_exp" },
    updatedAt: { __type: "timestamptz_comparison_exp" },
    userProviders: { __type: "authUserProviders_bool_exp" },
  },
  users_insert_input: {
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    defaultRole: { __type: "String" },
    defaultRoleByRole: { __type: "authRoles_obj_rel_insert_input" },
    disabled: { __type: "Boolean" },
    displayName: { __type: "String" },
    docs: { __type: "docs_arr_rel_insert_input" },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean" },
    id: { __type: "uuid" },
    isAnonymous: { __type: "Boolean" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean" },
    refreshTokens: { __type: "authRefreshTokens_arr_rel_insert_input" },
    roles: { __type: "authUserRoles_arr_rel_insert_input" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
    userProviders: { __type: "authUserProviders_arr_rel_insert_input" },
  },
  users_max_fields: {
    __typename: { __type: "String!" },
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    defaultRole: { __type: "String" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    id: { __type: "uuid" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  users_max_order_by: {
    activeMfaType: { __type: "order_by" },
    avatarUrl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    defaultRole: { __type: "order_by" },
    displayName: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    lastSeen: { __type: "order_by" },
    locale: { __type: "order_by" },
    newEmail: { __type: "order_by" },
    otpHash: { __type: "order_by" },
    otpHashExpiresAt: { __type: "order_by" },
    otpMethodLastUsed: { __type: "order_by" },
    passwordHash: { __type: "order_by" },
    phoneNumber: { __type: "order_by" },
    ticket: { __type: "order_by" },
    ticketExpiresAt: { __type: "order_by" },
    totpSecret: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  users_min_fields: {
    __typename: { __type: "String!" },
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    defaultRole: { __type: "String" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    id: { __type: "uuid" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  users_min_order_by: {
    activeMfaType: { __type: "order_by" },
    avatarUrl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    defaultRole: { __type: "order_by" },
    displayName: { __type: "order_by" },
    email: { __type: "order_by" },
    id: { __type: "order_by" },
    lastSeen: { __type: "order_by" },
    locale: { __type: "order_by" },
    newEmail: { __type: "order_by" },
    otpHash: { __type: "order_by" },
    otpHashExpiresAt: { __type: "order_by" },
    otpMethodLastUsed: { __type: "order_by" },
    passwordHash: { __type: "order_by" },
    phoneNumber: { __type: "order_by" },
    ticket: { __type: "order_by" },
    ticketExpiresAt: { __type: "order_by" },
    totpSecret: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
  },
  users_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[users!]!" },
  },
  users_obj_rel_insert_input: {
    data: { __type: "users_insert_input!" },
    on_conflict: { __type: "users_on_conflict" },
  },
  users_on_conflict: {
    constraint: { __type: "users_constraint!" },
    update_columns: { __type: "[users_update_column!]!" },
    where: { __type: "users_bool_exp" },
  },
  users_order_by: {
    activeMfaType: { __type: "order_by" },
    avatarUrl: { __type: "order_by" },
    createdAt: { __type: "order_by" },
    defaultRole: { __type: "order_by" },
    defaultRoleByRole: { __type: "authRoles_order_by" },
    disabled: { __type: "order_by" },
    displayName: { __type: "order_by" },
    docs_aggregate: { __type: "docs_aggregate_order_by" },
    email: { __type: "order_by" },
    emailVerified: { __type: "order_by" },
    id: { __type: "order_by" },
    isAnonymous: { __type: "order_by" },
    lastSeen: { __type: "order_by" },
    locale: { __type: "order_by" },
    newEmail: { __type: "order_by" },
    otpHash: { __type: "order_by" },
    otpHashExpiresAt: { __type: "order_by" },
    otpMethodLastUsed: { __type: "order_by" },
    passwordHash: { __type: "order_by" },
    phoneNumber: { __type: "order_by" },
    phoneNumberVerified: { __type: "order_by" },
    refreshTokens_aggregate: { __type: "authRefreshTokens_aggregate_order_by" },
    roles_aggregate: { __type: "authUserRoles_aggregate_order_by" },
    ticket: { __type: "order_by" },
    ticketExpiresAt: { __type: "order_by" },
    totpSecret: { __type: "order_by" },
    updatedAt: { __type: "order_by" },
    userProviders_aggregate: { __type: "authUserProviders_aggregate_order_by" },
  },
  users_pk_columns_input: { id: { __type: "uuid!" } },
  users_set_input: {
    activeMfaType: { __type: "String" },
    avatarUrl: { __type: "String" },
    createdAt: { __type: "timestamptz" },
    defaultRole: { __type: "String" },
    disabled: { __type: "Boolean" },
    displayName: { __type: "String" },
    email: { __type: "citext" },
    emailVerified: { __type: "Boolean" },
    id: { __type: "uuid" },
    isAnonymous: { __type: "Boolean" },
    lastSeen: { __type: "timestamptz" },
    locale: { __type: "String" },
    newEmail: { __type: "citext" },
    otpHash: { __type: "String" },
    otpHashExpiresAt: { __type: "timestamptz" },
    otpMethodLastUsed: { __type: "String" },
    passwordHash: { __type: "String" },
    phoneNumber: { __type: "String" },
    phoneNumberVerified: { __type: "Boolean" },
    ticket: { __type: "String" },
    ticketExpiresAt: { __type: "timestamptz" },
    totpSecret: { __type: "String" },
    updatedAt: { __type: "timestamptz" },
  },
  uuid_comparison_exp: {
    _eq: { __type: "uuid" },
    _gt: { __type: "uuid" },
    _gte: { __type: "uuid" },
    _in: { __type: "[uuid!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "uuid" },
    _lte: { __type: "uuid" },
    _neq: { __type: "uuid" },
    _nin: { __type: "[uuid!]" },
  },
} as const;

/**
 * columns and relationships of "auth.provider_requests"
 */
export interface authProviderRequests {
  __typename?: "authProviderRequests";
  id: ScalarsEnums["uuid"];
  redirectUrl: ScalarsEnums["String"];
}

/**
 * aggregated selection of "auth.provider_requests"
 */
export interface authProviderRequests_aggregate {
  __typename?: "authProviderRequests_aggregate";
  aggregate?: Maybe<authProviderRequests_aggregate_fields>;
  nodes: Array<authProviderRequests>;
}

/**
 * aggregate fields of "auth.provider_requests"
 */
export interface authProviderRequests_aggregate_fields {
  __typename?: "authProviderRequests_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authProviderRequests_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authProviderRequests_max_fields>;
  min?: Maybe<authProviderRequests_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authProviderRequests_max_fields {
  __typename?: "authProviderRequests_max_fields";
  id?: Maybe<ScalarsEnums["uuid"]>;
  redirectUrl?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface authProviderRequests_min_fields {
  __typename?: "authProviderRequests_min_fields";
  id?: Maybe<ScalarsEnums["uuid"]>;
  redirectUrl?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "auth.provider_requests"
 */
export interface authProviderRequests_mutation_response {
  __typename?: "authProviderRequests_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authProviderRequests>;
}

/**
 * columns and relationships of "auth.providers"
 */
export interface authProviders {
  __typename?: "authProviders";
  id: ScalarsEnums["String"];
  /**
   * An array relationship
   */
  userProviders: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  /**
   * An aggregate relationship
   */
  userProviders_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
}

/**
 * aggregated selection of "auth.providers"
 */
export interface authProviders_aggregate {
  __typename?: "authProviders_aggregate";
  aggregate?: Maybe<authProviders_aggregate_fields>;
  nodes: Array<authProviders>;
}

/**
 * aggregate fields of "auth.providers"
 */
export interface authProviders_aggregate_fields {
  __typename?: "authProviders_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authProviders_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authProviders_max_fields>;
  min?: Maybe<authProviders_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authProviders_max_fields {
  __typename?: "authProviders_max_fields";
  id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface authProviders_min_fields {
  __typename?: "authProviders_min_fields";
  id?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "auth.providers"
 */
export interface authProviders_mutation_response {
  __typename?: "authProviders_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authProviders>;
}

/**
 * columns and relationships of "auth.refresh_tokens"
 */
export interface authRefreshTokens {
  __typename?: "authRefreshTokens";
  createdAt: ScalarsEnums["timestamptz"];
  expiresAt: ScalarsEnums["timestamptz"];
  refreshToken: ScalarsEnums["uuid"];
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.refresh_tokens"
 */
export interface authRefreshTokens_aggregate {
  __typename?: "authRefreshTokens_aggregate";
  aggregate?: Maybe<authRefreshTokens_aggregate_fields>;
  nodes: Array<authRefreshTokens>;
}

/**
 * aggregate fields of "auth.refresh_tokens"
 */
export interface authRefreshTokens_aggregate_fields {
  __typename?: "authRefreshTokens_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authRefreshTokens_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authRefreshTokens_max_fields>;
  min?: Maybe<authRefreshTokens_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authRefreshTokens_max_fields {
  __typename?: "authRefreshTokens_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  expiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  refreshToken?: Maybe<ScalarsEnums["uuid"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authRefreshTokens_min_fields {
  __typename?: "authRefreshTokens_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  expiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  refreshToken?: Maybe<ScalarsEnums["uuid"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.refresh_tokens"
 */
export interface authRefreshTokens_mutation_response {
  __typename?: "authRefreshTokens_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authRefreshTokens>;
}

/**
 * columns and relationships of "auth.roles"
 */
export interface authRoles {
  __typename?: "authRoles";
  role: ScalarsEnums["String"];
  /**
   * An array relationship
   */
  userRoles: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  /**
   * An aggregate relationship
   */
  userRoles_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  /**
   * An array relationship
   */
  usersByDefaultRole: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<users_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<users_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
  /**
   * An aggregate relationship
   */
  usersByDefaultRole_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<users_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<users_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
}

/**
 * aggregated selection of "auth.roles"
 */
export interface authRoles_aggregate {
  __typename?: "authRoles_aggregate";
  aggregate?: Maybe<authRoles_aggregate_fields>;
  nodes: Array<authRoles>;
}

/**
 * aggregate fields of "auth.roles"
 */
export interface authRoles_aggregate_fields {
  __typename?: "authRoles_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authRoles_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authRoles_max_fields>;
  min?: Maybe<authRoles_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authRoles_max_fields {
  __typename?: "authRoles_max_fields";
  role?: Maybe<ScalarsEnums["String"]>;
}

/**
 * aggregate min on columns
 */
export interface authRoles_min_fields {
  __typename?: "authRoles_min_fields";
  role?: Maybe<ScalarsEnums["String"]>;
}

/**
 * response of any mutation on the table "auth.roles"
 */
export interface authRoles_mutation_response {
  __typename?: "authRoles_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authRoles>;
}

/**
 * columns and relationships of "auth.user_providers"
 */
export interface authUserProviders {
  __typename?: "authUserProviders";
  accessToken: ScalarsEnums["String"];
  createdAt: ScalarsEnums["timestamptz"];
  id: ScalarsEnums["uuid"];
  /**
   * An object relationship
   */
  provider: authProviders;
  providerId: ScalarsEnums["String"];
  providerUserId: ScalarsEnums["String"];
  refreshToken?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["timestamptz"];
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.user_providers"
 */
export interface authUserProviders_aggregate {
  __typename?: "authUserProviders_aggregate";
  aggregate?: Maybe<authUserProviders_aggregate_fields>;
  nodes: Array<authUserProviders>;
}

/**
 * aggregate fields of "auth.user_providers"
 */
export interface authUserProviders_aggregate_fields {
  __typename?: "authUserProviders_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authUserProviders_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authUserProviders_max_fields>;
  min?: Maybe<authUserProviders_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authUserProviders_max_fields {
  __typename?: "authUserProviders_max_fields";
  accessToken?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  providerId?: Maybe<ScalarsEnums["String"]>;
  providerUserId?: Maybe<ScalarsEnums["String"]>;
  refreshToken?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authUserProviders_min_fields {
  __typename?: "authUserProviders_min_fields";
  accessToken?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  providerId?: Maybe<ScalarsEnums["String"]>;
  providerUserId?: Maybe<ScalarsEnums["String"]>;
  refreshToken?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.user_providers"
 */
export interface authUserProviders_mutation_response {
  __typename?: "authUserProviders_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authUserProviders>;
}

/**
 * columns and relationships of "auth.user_roles"
 */
export interface authUserRoles {
  __typename?: "authUserRoles";
  createdAt: ScalarsEnums["timestamptz"];
  id: ScalarsEnums["uuid"];
  role: ScalarsEnums["String"];
  /**
   * An object relationship
   */
  roleByRole: authRoles;
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "auth.user_roles"
 */
export interface authUserRoles_aggregate {
  __typename?: "authUserRoles_aggregate";
  aggregate?: Maybe<authUserRoles_aggregate_fields>;
  nodes: Array<authUserRoles>;
}

/**
 * aggregate fields of "auth.user_roles"
 */
export interface authUserRoles_aggregate_fields {
  __typename?: "authUserRoles_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<authUserRoles_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<authUserRoles_max_fields>;
  min?: Maybe<authUserRoles_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface authUserRoles_max_fields {
  __typename?: "authUserRoles_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  role?: Maybe<ScalarsEnums["String"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface authUserRoles_min_fields {
  __typename?: "authUserRoles_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  role?: Maybe<ScalarsEnums["String"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "auth.user_roles"
 */
export interface authUserRoles_mutation_response {
  __typename?: "authUserRoles_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<authUserRoles>;
}

/**
 * columns and relationships of "storage.buckets"
 */
export interface buckets {
  __typename?: "buckets";
  cacheControl?: Maybe<ScalarsEnums["String"]>;
  createdAt: ScalarsEnums["timestamptz"];
  downloadExpiration: ScalarsEnums["Int"];
  /**
   * An array relationship
   */
  files: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<files_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<files_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  /**
   * An aggregate relationship
   */
  files_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<files_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<files_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<files_bool_exp>;
  }) => files_aggregate;
  id: ScalarsEnums["String"];
  maxUploadFileSize: ScalarsEnums["Int"];
  minUploadFileSize: ScalarsEnums["Int"];
  presignedUrlsEnabled: ScalarsEnums["Boolean"];
  updatedAt: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "storage.buckets"
 */
export interface buckets_aggregate {
  __typename?: "buckets_aggregate";
  aggregate?: Maybe<buckets_aggregate_fields>;
  nodes: Array<buckets>;
}

/**
 * aggregate fields of "storage.buckets"
 */
export interface buckets_aggregate_fields {
  __typename?: "buckets_aggregate_fields";
  avg?: Maybe<buckets_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<buckets_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<buckets_max_fields>;
  min?: Maybe<buckets_min_fields>;
  stddev?: Maybe<buckets_stddev_fields>;
  stddev_pop?: Maybe<buckets_stddev_pop_fields>;
  stddev_samp?: Maybe<buckets_stddev_samp_fields>;
  sum?: Maybe<buckets_sum_fields>;
  var_pop?: Maybe<buckets_var_pop_fields>;
  var_samp?: Maybe<buckets_var_samp_fields>;
  variance?: Maybe<buckets_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface buckets_avg_fields {
  __typename?: "buckets_avg_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface buckets_max_fields {
  __typename?: "buckets_max_fields";
  cacheControl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  downloadExpiration?: Maybe<ScalarsEnums["Int"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface buckets_min_fields {
  __typename?: "buckets_min_fields";
  cacheControl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  downloadExpiration?: Maybe<ScalarsEnums["Int"]>;
  id?: Maybe<ScalarsEnums["String"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "storage.buckets"
 */
export interface buckets_mutation_response {
  __typename?: "buckets_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<buckets>;
}

/**
 * aggregate stddev on columns
 */
export interface buckets_stddev_fields {
  __typename?: "buckets_stddev_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface buckets_stddev_pop_fields {
  __typename?: "buckets_stddev_pop_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface buckets_stddev_samp_fields {
  __typename?: "buckets_stddev_samp_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface buckets_sum_fields {
  __typename?: "buckets_sum_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Int"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface buckets_var_pop_fields {
  __typename?: "buckets_var_pop_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface buckets_var_samp_fields {
  __typename?: "buckets_var_samp_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface buckets_variance_fields {
  __typename?: "buckets_variance_fields";
  downloadExpiration?: Maybe<ScalarsEnums["Float"]>;
  maxUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
  minUploadFileSize?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * columns and relationships of "doc_links"
 */
export interface doc_links {
  __typename?: "doc_links";
  createdAt: ScalarsEnums["timestamptz"];
  /**
   * An object relationship
   */
  doc: docs;
  docId: ScalarsEnums["uuid"];
  /**
   * An array relationship
   */
  docVisits: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<doc_visits_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<doc_visits_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<doc_visits_bool_exp>;
  }) => Array<doc_visits>;
  /**
   * An aggregate relationship
   */
  docVisits_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<doc_visits_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<doc_visits_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<doc_visits_bool_exp>;
  }) => doc_visits_aggregate;
  downloadAllowed: ScalarsEnums["Boolean"];
  id: ScalarsEnums["uuid"];
  isActive: ScalarsEnums["Boolean"];
  passcode?: Maybe<ScalarsEnums["String"]>;
  requireEmailToView: ScalarsEnums["Boolean"];
  updatedAt: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "doc_links"
 */
export interface doc_links_aggregate {
  __typename?: "doc_links_aggregate";
  aggregate?: Maybe<doc_links_aggregate_fields>;
  nodes: Array<doc_links>;
}

/**
 * aggregate fields of "doc_links"
 */
export interface doc_links_aggregate_fields {
  __typename?: "doc_links_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<doc_links_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<doc_links_max_fields>;
  min?: Maybe<doc_links_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface doc_links_max_fields {
  __typename?: "doc_links_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  docId?: Maybe<ScalarsEnums["uuid"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  passcode?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface doc_links_min_fields {
  __typename?: "doc_links_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  docId?: Maybe<ScalarsEnums["uuid"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  passcode?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "doc_links"
 */
export interface doc_links_mutation_response {
  __typename?: "doc_links_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<doc_links>;
}

/**
 * columns and relationships of "doc_visits"
 */
export interface doc_visits {
  __typename?: "doc_visits";
  createdAt: ScalarsEnums["timestamptz"];
  /**
   * An object relationship
   */
  docLink: doc_links;
  docLinkId: ScalarsEnums["uuid"];
  email?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["uuid"];
  updatedAt: ScalarsEnums["timestamptz"];
}

/**
 * aggregated selection of "doc_visits"
 */
export interface doc_visits_aggregate {
  __typename?: "doc_visits_aggregate";
  aggregate?: Maybe<doc_visits_aggregate_fields>;
  nodes: Array<doc_visits>;
}

/**
 * aggregate fields of "doc_visits"
 */
export interface doc_visits_aggregate_fields {
  __typename?: "doc_visits_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<doc_visits_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<doc_visits_max_fields>;
  min?: Maybe<doc_visits_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface doc_visits_max_fields {
  __typename?: "doc_visits_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  docLinkId?: Maybe<ScalarsEnums["uuid"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface doc_visits_min_fields {
  __typename?: "doc_visits_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  docLinkId?: Maybe<ScalarsEnums["uuid"]>;
  email?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "doc_visits"
 */
export interface doc_visits_mutation_response {
  __typename?: "doc_visits_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<doc_visits>;
}

/**
 * columns and relationships of "docs"
 */
export interface docs {
  __typename?: "docs";
  createdAt: ScalarsEnums["timestamptz"];
  /**
   * An array relationship
   */
  docLinks: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<doc_links_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<doc_links_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<doc_links_bool_exp>;
  }) => Array<doc_links>;
  /**
   * An aggregate relationship
   */
  docLinks_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<doc_links_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<doc_links_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<doc_links_bool_exp>;
  }) => doc_links_aggregate;
  /**
   * An object relationship
   */
  file: files;
  fileId: ScalarsEnums["uuid"];
  id: ScalarsEnums["uuid"];
  name: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["timestamptz"];
  /**
   * An object relationship
   */
  user: users;
  userId: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "docs"
 */
export interface docs_aggregate {
  __typename?: "docs_aggregate";
  aggregate?: Maybe<docs_aggregate_fields>;
  nodes: Array<docs>;
}

/**
 * aggregate fields of "docs"
 */
export interface docs_aggregate_fields {
  __typename?: "docs_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<docs_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<docs_max_fields>;
  min?: Maybe<docs_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface docs_max_fields {
  __typename?: "docs_max_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  fileId?: Maybe<ScalarsEnums["uuid"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface docs_min_fields {
  __typename?: "docs_min_fields";
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  fileId?: Maybe<ScalarsEnums["uuid"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  userId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "docs"
 */
export interface docs_mutation_response {
  __typename?: "docs_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<docs>;
}

/**
 * columns and relationships of "storage.files"
 */
export interface files {
  __typename?: "files";
  /**
   * An object relationship
   */
  bucket: buckets;
  bucketId: ScalarsEnums["String"];
  createdAt: ScalarsEnums["timestamptz"];
  /**
   * An array relationship
   */
  docs: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<docs_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<docs_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<docs_bool_exp>;
  }) => Array<docs>;
  /**
   * An aggregate relationship
   */
  docs_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<docs_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<docs_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<docs_bool_exp>;
  }) => docs_aggregate;
  etag?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["uuid"];
  isUploaded?: Maybe<ScalarsEnums["Boolean"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  updatedAt: ScalarsEnums["timestamptz"];
  uploadedByUserId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregated selection of "storage.files"
 */
export interface files_aggregate {
  __typename?: "files_aggregate";
  aggregate?: Maybe<files_aggregate_fields>;
  nodes: Array<files>;
}

/**
 * aggregate fields of "storage.files"
 */
export interface files_aggregate_fields {
  __typename?: "files_aggregate_fields";
  avg?: Maybe<files_avg_fields>;
  count: (args?: {
    columns?: Maybe<Array<files_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<files_max_fields>;
  min?: Maybe<files_min_fields>;
  stddev?: Maybe<files_stddev_fields>;
  stddev_pop?: Maybe<files_stddev_pop_fields>;
  stddev_samp?: Maybe<files_stddev_samp_fields>;
  sum?: Maybe<files_sum_fields>;
  var_pop?: Maybe<files_var_pop_fields>;
  var_samp?: Maybe<files_var_samp_fields>;
  variance?: Maybe<files_variance_fields>;
}

/**
 * aggregate avg on columns
 */
export interface files_avg_fields {
  __typename?: "files_avg_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate max on columns
 */
export interface files_max_fields {
  __typename?: "files_max_fields";
  bucketId?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  etag?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  uploadedByUserId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface files_min_fields {
  __typename?: "files_min_fields";
  bucketId?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  etag?: Maybe<ScalarsEnums["String"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  mimeType?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  size?: Maybe<ScalarsEnums["Int"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
  uploadedByUserId?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "storage.files"
 */
export interface files_mutation_response {
  __typename?: "files_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<files>;
}

/**
 * aggregate stddev on columns
 */
export interface files_stddev_fields {
  __typename?: "files_stddev_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_pop on columns
 */
export interface files_stddev_pop_fields {
  __typename?: "files_stddev_pop_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate stddev_samp on columns
 */
export interface files_stddev_samp_fields {
  __typename?: "files_stddev_samp_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate sum on columns
 */
export interface files_sum_fields {
  __typename?: "files_sum_fields";
  size?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * aggregate var_pop on columns
 */
export interface files_var_pop_fields {
  __typename?: "files_var_pop_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate var_samp on columns
 */
export interface files_var_samp_fields {
  __typename?: "files_var_samp_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

/**
 * aggregate variance on columns
 */
export interface files_variance_fields {
  __typename?: "files_variance_fields";
  size?: Maybe<ScalarsEnums["Float"]>;
}

export interface Mutation {
  __typename?: "Mutation";
  DeleteDoc: (args: { id: Scalars["uuid"] }) => Maybe<docs>;
  deleteAuthProvider: (args: { id: Scalars["String"] }) => Maybe<authProviders>;
  deleteAuthProviderRequest: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authProviderRequests>;
  deleteAuthProviderRequests: (args: {
    where: authProviderRequests_bool_exp;
  }) => Maybe<authProviderRequests_mutation_response>;
  deleteAuthProviders: (args: {
    where: authProviders_bool_exp;
  }) => Maybe<authProviders_mutation_response>;
  deleteAuthRefreshToken: (args: {
    refreshToken: Scalars["uuid"];
  }) => Maybe<authRefreshTokens>;
  deleteAuthRefreshTokens: (args: {
    where: authRefreshTokens_bool_exp;
  }) => Maybe<authRefreshTokens_mutation_response>;
  deleteAuthRole: (args: { role: Scalars["String"] }) => Maybe<authRoles>;
  deleteAuthRoles: (args: {
    where: authRoles_bool_exp;
  }) => Maybe<authRoles_mutation_response>;
  deleteAuthUserProvider: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authUserProviders>;
  deleteAuthUserProviders: (args: {
    where: authUserProviders_bool_exp;
  }) => Maybe<authUserProviders_mutation_response>;
  deleteAuthUserRole: (args: { id: Scalars["uuid"] }) => Maybe<authUserRoles>;
  deleteAuthUserRoles: (args: {
    where: authUserRoles_bool_exp;
  }) => Maybe<authUserRoles_mutation_response>;
  deleteBucket: (args: { id: Scalars["String"] }) => Maybe<buckets>;
  deleteBuckets: (args: {
    where: buckets_bool_exp;
  }) => Maybe<buckets_mutation_response>;
  deleteDocs: (args: { where: docs_bool_exp }) => Maybe<docs_mutation_response>;
  deleteFile: (args: { id: Scalars["uuid"] }) => Maybe<files>;
  deleteFiles: (args: {
    where: files_bool_exp;
  }) => Maybe<files_mutation_response>;
  deleteUser: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  deleteUsers: (args: {
    where: users_bool_exp;
  }) => Maybe<users_mutation_response>;
  delete_doc_links: (args: {
    where: doc_links_bool_exp;
  }) => Maybe<doc_links_mutation_response>;
  delete_doc_links_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<doc_links>;
  delete_doc_visits: (args: {
    where: doc_visits_bool_exp;
  }) => Maybe<doc_visits_mutation_response>;
  delete_doc_visits_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<doc_visits>;
  insertAuthProvider: (args: {
    object: authProviders_insert_input;
    on_conflict?: Maybe<authProviders_on_conflict>;
  }) => Maybe<authProviders>;
  insertAuthProviderRequest: (args: {
    object: authProviderRequests_insert_input;
    on_conflict?: Maybe<authProviderRequests_on_conflict>;
  }) => Maybe<authProviderRequests>;
  insertAuthProviderRequests: (args: {
    objects: Array<authProviderRequests_insert_input>;
    on_conflict?: Maybe<authProviderRequests_on_conflict>;
  }) => Maybe<authProviderRequests_mutation_response>;
  insertAuthProviders: (args: {
    objects: Array<authProviders_insert_input>;
    on_conflict?: Maybe<authProviders_on_conflict>;
  }) => Maybe<authProviders_mutation_response>;
  insertAuthRefreshToken: (args: {
    object: authRefreshTokens_insert_input;
    on_conflict?: Maybe<authRefreshTokens_on_conflict>;
  }) => Maybe<authRefreshTokens>;
  insertAuthRefreshTokens: (args: {
    objects: Array<authRefreshTokens_insert_input>;
    on_conflict?: Maybe<authRefreshTokens_on_conflict>;
  }) => Maybe<authRefreshTokens_mutation_response>;
  insertAuthRole: (args: {
    object: authRoles_insert_input;
    on_conflict?: Maybe<authRoles_on_conflict>;
  }) => Maybe<authRoles>;
  insertAuthRoles: (args: {
    objects: Array<authRoles_insert_input>;
    on_conflict?: Maybe<authRoles_on_conflict>;
  }) => Maybe<authRoles_mutation_response>;
  insertAuthUserProvider: (args: {
    object: authUserProviders_insert_input;
    on_conflict?: Maybe<authUserProviders_on_conflict>;
  }) => Maybe<authUserProviders>;
  insertAuthUserProviders: (args: {
    objects: Array<authUserProviders_insert_input>;
    on_conflict?: Maybe<authUserProviders_on_conflict>;
  }) => Maybe<authUserProviders_mutation_response>;
  insertAuthUserRole: (args: {
    object: authUserRoles_insert_input;
    on_conflict?: Maybe<authUserRoles_on_conflict>;
  }) => Maybe<authUserRoles>;
  insertAuthUserRoles: (args: {
    objects: Array<authUserRoles_insert_input>;
    on_conflict?: Maybe<authUserRoles_on_conflict>;
  }) => Maybe<authUserRoles_mutation_response>;
  insertBucket: (args: {
    object: buckets_insert_input;
    on_conflict?: Maybe<buckets_on_conflict>;
  }) => Maybe<buckets>;
  insertBuckets: (args: {
    objects: Array<buckets_insert_input>;
    on_conflict?: Maybe<buckets_on_conflict>;
  }) => Maybe<buckets_mutation_response>;
  insertDoc: (args: {
    object: docs_insert_input;
    on_conflict?: Maybe<docs_on_conflict>;
  }) => Maybe<docs>;
  insertDocLink: (args: {
    object: doc_links_insert_input;
    on_conflict?: Maybe<doc_links_on_conflict>;
  }) => Maybe<doc_links>;
  insertDocLinks: (args: {
    objects: Array<doc_links_insert_input>;
    on_conflict?: Maybe<doc_links_on_conflict>;
  }) => Maybe<doc_links_mutation_response>;
  insertDocs: (args: {
    objects: Array<docs_insert_input>;
    on_conflict?: Maybe<docs_on_conflict>;
  }) => Maybe<docs_mutation_response>;
  insertFile: (args: {
    object: files_insert_input;
    on_conflict?: Maybe<files_on_conflict>;
  }) => Maybe<files>;
  insertFiles: (args: {
    objects: Array<files_insert_input>;
    on_conflict?: Maybe<files_on_conflict>;
  }) => Maybe<files_mutation_response>;
  insertUser: (args: {
    object: users_insert_input;
    on_conflict?: Maybe<users_on_conflict>;
  }) => Maybe<users>;
  insertUsers: (args: {
    objects: Array<users_insert_input>;
    on_conflict?: Maybe<users_on_conflict>;
  }) => Maybe<users_mutation_response>;
  insert_doc_visits: (args: {
    objects: Array<doc_visits_insert_input>;
    on_conflict?: Maybe<doc_visits_on_conflict>;
  }) => Maybe<doc_visits_mutation_response>;
  insert_doc_visits_one: (args: {
    object: doc_visits_insert_input;
    on_conflict?: Maybe<doc_visits_on_conflict>;
  }) => Maybe<doc_visits>;
  updateAuthProvider: (args: {
    _set?: Maybe<authProviders_set_input>;
    pk_columns: authProviders_pk_columns_input;
  }) => Maybe<authProviders>;
  updateAuthProviderRequest: (args: {
    _set?: Maybe<authProviderRequests_set_input>;
    pk_columns: authProviderRequests_pk_columns_input;
  }) => Maybe<authProviderRequests>;
  updateAuthProviderRequests: (args: {
    _set?: Maybe<authProviderRequests_set_input>;
    where: authProviderRequests_bool_exp;
  }) => Maybe<authProviderRequests_mutation_response>;
  updateAuthProviders: (args: {
    _set?: Maybe<authProviders_set_input>;
    where: authProviders_bool_exp;
  }) => Maybe<authProviders_mutation_response>;
  updateAuthRefreshToken: (args: {
    _set?: Maybe<authRefreshTokens_set_input>;
    pk_columns: authRefreshTokens_pk_columns_input;
  }) => Maybe<authRefreshTokens>;
  updateAuthRefreshTokens: (args: {
    _set?: Maybe<authRefreshTokens_set_input>;
    where: authRefreshTokens_bool_exp;
  }) => Maybe<authRefreshTokens_mutation_response>;
  updateAuthRole: (args: {
    _set?: Maybe<authRoles_set_input>;
    pk_columns: authRoles_pk_columns_input;
  }) => Maybe<authRoles>;
  updateAuthRoles: (args: {
    _set?: Maybe<authRoles_set_input>;
    where: authRoles_bool_exp;
  }) => Maybe<authRoles_mutation_response>;
  updateAuthUserProvider: (args: {
    _set?: Maybe<authUserProviders_set_input>;
    pk_columns: authUserProviders_pk_columns_input;
  }) => Maybe<authUserProviders>;
  updateAuthUserProviders: (args: {
    _set?: Maybe<authUserProviders_set_input>;
    where: authUserProviders_bool_exp;
  }) => Maybe<authUserProviders_mutation_response>;
  updateAuthUserRole: (args: {
    _set?: Maybe<authUserRoles_set_input>;
    pk_columns: authUserRoles_pk_columns_input;
  }) => Maybe<authUserRoles>;
  updateAuthUserRoles: (args: {
    _set?: Maybe<authUserRoles_set_input>;
    where: authUserRoles_bool_exp;
  }) => Maybe<authUserRoles_mutation_response>;
  updateBucket: (args: {
    _inc?: Maybe<buckets_inc_input>;
    _set?: Maybe<buckets_set_input>;
    pk_columns: buckets_pk_columns_input;
  }) => Maybe<buckets>;
  updateBuckets: (args: {
    _inc?: Maybe<buckets_inc_input>;
    _set?: Maybe<buckets_set_input>;
    where: buckets_bool_exp;
  }) => Maybe<buckets_mutation_response>;
  updateDoc: (args: {
    _set?: Maybe<docs_set_input>;
    pk_columns: docs_pk_columns_input;
  }) => Maybe<docs>;
  updateDocs: (args: {
    _set?: Maybe<docs_set_input>;
    where: docs_bool_exp;
  }) => Maybe<docs_mutation_response>;
  updateFile: (args: {
    _inc?: Maybe<files_inc_input>;
    _set?: Maybe<files_set_input>;
    pk_columns: files_pk_columns_input;
  }) => Maybe<files>;
  updateFiles: (args: {
    _inc?: Maybe<files_inc_input>;
    _set?: Maybe<files_set_input>;
    where: files_bool_exp;
  }) => Maybe<files_mutation_response>;
  updateUser: (args: {
    _set?: Maybe<users_set_input>;
    pk_columns: users_pk_columns_input;
  }) => Maybe<users>;
  updateUsers: (args: {
    _set?: Maybe<users_set_input>;
    where: users_bool_exp;
  }) => Maybe<users_mutation_response>;
  update_doc_links: (args: {
    _set?: Maybe<doc_links_set_input>;
    where: doc_links_bool_exp;
  }) => Maybe<doc_links_mutation_response>;
  update_doc_links_by_pk: (args: {
    _set?: Maybe<doc_links_set_input>;
    pk_columns: doc_links_pk_columns_input;
  }) => Maybe<doc_links>;
  update_doc_visits: (args: {
    _set?: Maybe<doc_visits_set_input>;
    where: doc_visits_bool_exp;
  }) => Maybe<doc_visits_mutation_response>;
  update_doc_visits_by_pk: (args: {
    _set?: Maybe<doc_visits_set_input>;
    pk_columns: doc_visits_pk_columns_input;
  }) => Maybe<doc_visits>;
}

export interface Query {
  __typename?: "Query";
  authProvider: (args: { id: Scalars["String"] }) => Maybe<authProviders>;
  authProviderRequest: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authProviderRequests>;
  authProviderRequests: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => Array<authProviderRequests>;
  authProviderRequestsAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => authProviderRequests_aggregate;
  authProviders: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => Array<authProviders>;
  authProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => authProviders_aggregate;
  authRefreshToken: (args: {
    refreshToken: Scalars["uuid"];
  }) => Maybe<authRefreshTokens>;
  authRefreshTokens: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  authRefreshTokensAggregate: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => authRefreshTokens_aggregate;
  authRole: (args: { role: Scalars["String"] }) => Maybe<authRoles>;
  authRoles: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => Array<authRoles>;
  authRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => authRoles_aggregate;
  authUserProvider: (args: { id: Scalars["uuid"] }) => Maybe<authUserProviders>;
  authUserProviders: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  authUserProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
  authUserRole: (args: { id: Scalars["uuid"] }) => Maybe<authUserRoles>;
  authUserRoles: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  authUserRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  bucket: (args: { id: Scalars["String"] }) => Maybe<buckets>;
  buckets: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => Array<buckets>;
  bucketsAggregate: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => buckets_aggregate;
  doc: (args: { id: Scalars["uuid"] }) => Maybe<docs>;
  docLink: (args: { id: Scalars["uuid"] }) => Maybe<doc_links>;
  docLinks: (args?: {
    distinct_on?: Maybe<Array<doc_links_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_links_order_by>>;
    where?: Maybe<doc_links_bool_exp>;
  }) => Array<doc_links>;
  doc_links_aggregate: (args?: {
    distinct_on?: Maybe<Array<doc_links_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_links_order_by>>;
    where?: Maybe<doc_links_bool_exp>;
  }) => doc_links_aggregate;
  doc_visits: (args?: {
    distinct_on?: Maybe<Array<doc_visits_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_visits_order_by>>;
    where?: Maybe<doc_visits_bool_exp>;
  }) => Array<doc_visits>;
  doc_visits_aggregate: (args?: {
    distinct_on?: Maybe<Array<doc_visits_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_visits_order_by>>;
    where?: Maybe<doc_visits_bool_exp>;
  }) => doc_visits_aggregate;
  doc_visits_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<doc_visits>;
  docs: (args?: {
    distinct_on?: Maybe<Array<docs_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<docs_order_by>>;
    where?: Maybe<docs_bool_exp>;
  }) => Array<docs>;
  docsAggregate: (args?: {
    distinct_on?: Maybe<Array<docs_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<docs_order_by>>;
    where?: Maybe<docs_bool_exp>;
  }) => docs_aggregate;
  file: (args: { id: Scalars["uuid"] }) => Maybe<files>;
  files: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  filesAggregate: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => files_aggregate;
  user: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  userAggregate: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
}

export interface Subscription {
  __typename?: "Subscription";
  authProvider: (args: { id: Scalars["String"] }) => Maybe<authProviders>;
  authProviderRequest: (args: {
    id: Scalars["uuid"];
  }) => Maybe<authProviderRequests>;
  authProviderRequests: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => Array<authProviderRequests>;
  authProviderRequestsAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviderRequests_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviderRequests_order_by>>;
    where?: Maybe<authProviderRequests_bool_exp>;
  }) => authProviderRequests_aggregate;
  authProviders: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => Array<authProviders>;
  authProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authProviders_order_by>>;
    where?: Maybe<authProviders_bool_exp>;
  }) => authProviders_aggregate;
  authRefreshToken: (args: {
    refreshToken: Scalars["uuid"];
  }) => Maybe<authRefreshTokens>;
  authRefreshTokens: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  authRefreshTokensAggregate: (args?: {
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => authRefreshTokens_aggregate;
  authRole: (args: { role: Scalars["String"] }) => Maybe<authRoles>;
  authRoles: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => Array<authRoles>;
  authRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authRoles_order_by>>;
    where?: Maybe<authRoles_bool_exp>;
  }) => authRoles_aggregate;
  authUserProvider: (args: { id: Scalars["uuid"] }) => Maybe<authUserProviders>;
  authUserProviders: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  authUserProvidersAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
  authUserRole: (args: { id: Scalars["uuid"] }) => Maybe<authUserRoles>;
  authUserRoles: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  authUserRolesAggregate: (args?: {
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  bucket: (args: { id: Scalars["String"] }) => Maybe<buckets>;
  buckets: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => Array<buckets>;
  bucketsAggregate: (args?: {
    distinct_on?: Maybe<Array<buckets_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<buckets_order_by>>;
    where?: Maybe<buckets_bool_exp>;
  }) => buckets_aggregate;
  doc: (args: { id: Scalars["uuid"] }) => Maybe<docs>;
  docLink: (args: { id: Scalars["uuid"] }) => Maybe<doc_links>;
  docLinks: (args?: {
    distinct_on?: Maybe<Array<doc_links_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_links_order_by>>;
    where?: Maybe<doc_links_bool_exp>;
  }) => Array<doc_links>;
  doc_links_aggregate: (args?: {
    distinct_on?: Maybe<Array<doc_links_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_links_order_by>>;
    where?: Maybe<doc_links_bool_exp>;
  }) => doc_links_aggregate;
  doc_visits: (args?: {
    distinct_on?: Maybe<Array<doc_visits_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_visits_order_by>>;
    where?: Maybe<doc_visits_bool_exp>;
  }) => Array<doc_visits>;
  doc_visits_aggregate: (args?: {
    distinct_on?: Maybe<Array<doc_visits_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<doc_visits_order_by>>;
    where?: Maybe<doc_visits_bool_exp>;
  }) => doc_visits_aggregate;
  doc_visits_by_pk: (args: { id: Scalars["uuid"] }) => Maybe<doc_visits>;
  docs: (args?: {
    distinct_on?: Maybe<Array<docs_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<docs_order_by>>;
    where?: Maybe<docs_bool_exp>;
  }) => Array<docs>;
  docsAggregate: (args?: {
    distinct_on?: Maybe<Array<docs_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<docs_order_by>>;
    where?: Maybe<docs_bool_exp>;
  }) => docs_aggregate;
  file: (args: { id: Scalars["uuid"] }) => Maybe<files>;
  files: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => Array<files>;
  filesAggregate: (args?: {
    distinct_on?: Maybe<Array<files_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<files_order_by>>;
    where?: Maybe<files_bool_exp>;
  }) => files_aggregate;
  user: (args: { id: Scalars["uuid"] }) => Maybe<users>;
  userAggregate: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => users_aggregate;
  users: (args?: {
    distinct_on?: Maybe<Array<users_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<users_order_by>>;
    where?: Maybe<users_bool_exp>;
  }) => Array<users>;
}

/**
 * columns and relationships of "auth.users"
 */
export interface users {
  __typename?: "users";
  activeMfaType?: Maybe<ScalarsEnums["String"]>;
  avatarUrl: ScalarsEnums["String"];
  createdAt: ScalarsEnums["timestamptz"];
  defaultRole: ScalarsEnums["String"];
  /**
   * An object relationship
   */
  defaultRoleByRole: authRoles;
  disabled: ScalarsEnums["Boolean"];
  displayName: ScalarsEnums["String"];
  /**
   * An array relationship
   */
  docs: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<docs_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<docs_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<docs_bool_exp>;
  }) => Array<docs>;
  /**
   * An aggregate relationship
   */
  docs_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<docs_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<docs_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<docs_bool_exp>;
  }) => docs_aggregate;
  email?: Maybe<ScalarsEnums["citext"]>;
  emailVerified: ScalarsEnums["Boolean"];
  id: ScalarsEnums["uuid"];
  isAnonymous: ScalarsEnums["Boolean"];
  lastSeen?: Maybe<ScalarsEnums["timestamptz"]>;
  locale: ScalarsEnums["String"];
  newEmail?: Maybe<ScalarsEnums["citext"]>;
  otpHash?: Maybe<ScalarsEnums["String"]>;
  otpHashExpiresAt: ScalarsEnums["timestamptz"];
  otpMethodLastUsed?: Maybe<ScalarsEnums["String"]>;
  passwordHash?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  phoneNumberVerified: ScalarsEnums["Boolean"];
  /**
   * An array relationship
   */
  refreshTokens: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => Array<authRefreshTokens>;
  /**
   * An aggregate relationship
   */
  refreshTokens_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authRefreshTokens_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authRefreshTokens_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authRefreshTokens_bool_exp>;
  }) => authRefreshTokens_aggregate;
  /**
   * An array relationship
   */
  roles: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => Array<authUserRoles>;
  /**
   * An aggregate relationship
   */
  roles_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserRoles_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserRoles_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserRoles_bool_exp>;
  }) => authUserRoles_aggregate;
  ticket?: Maybe<ScalarsEnums["String"]>;
  ticketExpiresAt: ScalarsEnums["timestamptz"];
  totpSecret?: Maybe<ScalarsEnums["String"]>;
  updatedAt: ScalarsEnums["timestamptz"];
  /**
   * An array relationship
   */
  userProviders: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => Array<authUserProviders>;
  /**
   * An aggregate relationship
   */
  userProviders_aggregate: (args?: {
    /**
     * distinct select on columns
     */
    distinct_on?: Maybe<Array<authUserProviders_select_column>>;
    /**
     * limit the number of rows returned
     */
    limit?: Maybe<Scalars["Int"]>;
    /**
     * skip the first n rows. Use only with order_by
     */
    offset?: Maybe<Scalars["Int"]>;
    /**
     * sort the rows by one or more columns
     */
    order_by?: Maybe<Array<authUserProviders_order_by>>;
    /**
     * filter the rows returned
     */
    where?: Maybe<authUserProviders_bool_exp>;
  }) => authUserProviders_aggregate;
}

/**
 * aggregated selection of "auth.users"
 */
export interface users_aggregate {
  __typename?: "users_aggregate";
  aggregate?: Maybe<users_aggregate_fields>;
  nodes: Array<users>;
}

/**
 * aggregate fields of "auth.users"
 */
export interface users_aggregate_fields {
  __typename?: "users_aggregate_fields";
  count: (args?: {
    columns?: Maybe<Array<users_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<users_max_fields>;
  min?: Maybe<users_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface users_max_fields {
  __typename?: "users_max_fields";
  activeMfaType?: Maybe<ScalarsEnums["String"]>;
  avatarUrl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  defaultRole?: Maybe<ScalarsEnums["String"]>;
  displayName?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["citext"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  lastSeen?: Maybe<ScalarsEnums["timestamptz"]>;
  locale?: Maybe<ScalarsEnums["String"]>;
  newEmail?: Maybe<ScalarsEnums["citext"]>;
  otpHash?: Maybe<ScalarsEnums["String"]>;
  otpHashExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  otpMethodLastUsed?: Maybe<ScalarsEnums["String"]>;
  passwordHash?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  ticket?: Maybe<ScalarsEnums["String"]>;
  ticketExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  totpSecret?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * aggregate min on columns
 */
export interface users_min_fields {
  __typename?: "users_min_fields";
  activeMfaType?: Maybe<ScalarsEnums["String"]>;
  avatarUrl?: Maybe<ScalarsEnums["String"]>;
  createdAt?: Maybe<ScalarsEnums["timestamptz"]>;
  defaultRole?: Maybe<ScalarsEnums["String"]>;
  displayName?: Maybe<ScalarsEnums["String"]>;
  email?: Maybe<ScalarsEnums["citext"]>;
  id?: Maybe<ScalarsEnums["uuid"]>;
  lastSeen?: Maybe<ScalarsEnums["timestamptz"]>;
  locale?: Maybe<ScalarsEnums["String"]>;
  newEmail?: Maybe<ScalarsEnums["citext"]>;
  otpHash?: Maybe<ScalarsEnums["String"]>;
  otpHashExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  otpMethodLastUsed?: Maybe<ScalarsEnums["String"]>;
  passwordHash?: Maybe<ScalarsEnums["String"]>;
  phoneNumber?: Maybe<ScalarsEnums["String"]>;
  ticket?: Maybe<ScalarsEnums["String"]>;
  ticketExpiresAt?: Maybe<ScalarsEnums["timestamptz"]>;
  totpSecret?: Maybe<ScalarsEnums["String"]>;
  updatedAt?: Maybe<ScalarsEnums["timestamptz"]>;
}

/**
 * response of any mutation on the table "auth.users"
 */
export interface users_mutation_response {
  __typename?: "users_mutation_response";
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<users>;
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Query: Query;
  Subscription: Subscription;
  authProviderRequests: authProviderRequests;
  authProviderRequests_aggregate: authProviderRequests_aggregate;
  authProviderRequests_aggregate_fields: authProviderRequests_aggregate_fields;
  authProviderRequests_max_fields: authProviderRequests_max_fields;
  authProviderRequests_min_fields: authProviderRequests_min_fields;
  authProviderRequests_mutation_response: authProviderRequests_mutation_response;
  authProviders: authProviders;
  authProviders_aggregate: authProviders_aggregate;
  authProviders_aggregate_fields: authProviders_aggregate_fields;
  authProviders_max_fields: authProviders_max_fields;
  authProviders_min_fields: authProviders_min_fields;
  authProviders_mutation_response: authProviders_mutation_response;
  authRefreshTokens: authRefreshTokens;
  authRefreshTokens_aggregate: authRefreshTokens_aggregate;
  authRefreshTokens_aggregate_fields: authRefreshTokens_aggregate_fields;
  authRefreshTokens_max_fields: authRefreshTokens_max_fields;
  authRefreshTokens_min_fields: authRefreshTokens_min_fields;
  authRefreshTokens_mutation_response: authRefreshTokens_mutation_response;
  authRoles: authRoles;
  authRoles_aggregate: authRoles_aggregate;
  authRoles_aggregate_fields: authRoles_aggregate_fields;
  authRoles_max_fields: authRoles_max_fields;
  authRoles_min_fields: authRoles_min_fields;
  authRoles_mutation_response: authRoles_mutation_response;
  authUserProviders: authUserProviders;
  authUserProviders_aggregate: authUserProviders_aggregate;
  authUserProviders_aggregate_fields: authUserProviders_aggregate_fields;
  authUserProviders_max_fields: authUserProviders_max_fields;
  authUserProviders_min_fields: authUserProviders_min_fields;
  authUserProviders_mutation_response: authUserProviders_mutation_response;
  authUserRoles: authUserRoles;
  authUserRoles_aggregate: authUserRoles_aggregate;
  authUserRoles_aggregate_fields: authUserRoles_aggregate_fields;
  authUserRoles_max_fields: authUserRoles_max_fields;
  authUserRoles_min_fields: authUserRoles_min_fields;
  authUserRoles_mutation_response: authUserRoles_mutation_response;
  buckets: buckets;
  buckets_aggregate: buckets_aggregate;
  buckets_aggregate_fields: buckets_aggregate_fields;
  buckets_avg_fields: buckets_avg_fields;
  buckets_max_fields: buckets_max_fields;
  buckets_min_fields: buckets_min_fields;
  buckets_mutation_response: buckets_mutation_response;
  buckets_stddev_fields: buckets_stddev_fields;
  buckets_stddev_pop_fields: buckets_stddev_pop_fields;
  buckets_stddev_samp_fields: buckets_stddev_samp_fields;
  buckets_sum_fields: buckets_sum_fields;
  buckets_var_pop_fields: buckets_var_pop_fields;
  buckets_var_samp_fields: buckets_var_samp_fields;
  buckets_variance_fields: buckets_variance_fields;
  doc_links: doc_links;
  doc_links_aggregate: doc_links_aggregate;
  doc_links_aggregate_fields: doc_links_aggregate_fields;
  doc_links_max_fields: doc_links_max_fields;
  doc_links_min_fields: doc_links_min_fields;
  doc_links_mutation_response: doc_links_mutation_response;
  doc_visits: doc_visits;
  doc_visits_aggregate: doc_visits_aggregate;
  doc_visits_aggregate_fields: doc_visits_aggregate_fields;
  doc_visits_max_fields: doc_visits_max_fields;
  doc_visits_min_fields: doc_visits_min_fields;
  doc_visits_mutation_response: doc_visits_mutation_response;
  docs: docs;
  docs_aggregate: docs_aggregate;
  docs_aggregate_fields: docs_aggregate_fields;
  docs_max_fields: docs_max_fields;
  docs_min_fields: docs_min_fields;
  docs_mutation_response: docs_mutation_response;
  files: files;
  files_aggregate: files_aggregate;
  files_aggregate_fields: files_aggregate_fields;
  files_avg_fields: files_avg_fields;
  files_max_fields: files_max_fields;
  files_min_fields: files_min_fields;
  files_mutation_response: files_mutation_response;
  files_stddev_fields: files_stddev_fields;
  files_stddev_pop_fields: files_stddev_pop_fields;
  files_stddev_samp_fields: files_stddev_samp_fields;
  files_sum_fields: files_sum_fields;
  files_var_pop_fields: files_var_pop_fields;
  files_var_samp_fields: files_var_samp_fields;
  files_variance_fields: files_variance_fields;
  users: users;
  users_aggregate: users_aggregate;
  users_aggregate_fields: users_aggregate_fields;
  users_max_fields: users_max_fields;
  users_min_fields: users_min_fields;
  users_mutation_response: users_mutation_response;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Query"
  | "Subscription"
  | "authProviderRequests"
  | "authProviderRequests_aggregate"
  | "authProviderRequests_aggregate_fields"
  | "authProviderRequests_max_fields"
  | "authProviderRequests_min_fields"
  | "authProviderRequests_mutation_response"
  | "authProviders"
  | "authProviders_aggregate"
  | "authProviders_aggregate_fields"
  | "authProviders_max_fields"
  | "authProviders_min_fields"
  | "authProviders_mutation_response"
  | "authRefreshTokens"
  | "authRefreshTokens_aggregate"
  | "authRefreshTokens_aggregate_fields"
  | "authRefreshTokens_max_fields"
  | "authRefreshTokens_min_fields"
  | "authRefreshTokens_mutation_response"
  | "authRoles"
  | "authRoles_aggregate"
  | "authRoles_aggregate_fields"
  | "authRoles_max_fields"
  | "authRoles_min_fields"
  | "authRoles_mutation_response"
  | "authUserProviders"
  | "authUserProviders_aggregate"
  | "authUserProviders_aggregate_fields"
  | "authUserProviders_max_fields"
  | "authUserProviders_min_fields"
  | "authUserProviders_mutation_response"
  | "authUserRoles"
  | "authUserRoles_aggregate"
  | "authUserRoles_aggregate_fields"
  | "authUserRoles_max_fields"
  | "authUserRoles_min_fields"
  | "authUserRoles_mutation_response"
  | "buckets"
  | "buckets_aggregate"
  | "buckets_aggregate_fields"
  | "buckets_avg_fields"
  | "buckets_max_fields"
  | "buckets_min_fields"
  | "buckets_mutation_response"
  | "buckets_stddev_fields"
  | "buckets_stddev_pop_fields"
  | "buckets_stddev_samp_fields"
  | "buckets_sum_fields"
  | "buckets_var_pop_fields"
  | "buckets_var_samp_fields"
  | "buckets_variance_fields"
  | "doc_links"
  | "doc_links_aggregate"
  | "doc_links_aggregate_fields"
  | "doc_links_max_fields"
  | "doc_links_min_fields"
  | "doc_links_mutation_response"
  | "doc_visits"
  | "doc_visits_aggregate"
  | "doc_visits_aggregate_fields"
  | "doc_visits_max_fields"
  | "doc_visits_min_fields"
  | "doc_visits_mutation_response"
  | "docs"
  | "docs_aggregate"
  | "docs_aggregate_fields"
  | "docs_max_fields"
  | "docs_min_fields"
  | "docs_mutation_response"
  | "files"
  | "files_aggregate"
  | "files_aggregate_fields"
  | "files_avg_fields"
  | "files_max_fields"
  | "files_min_fields"
  | "files_mutation_response"
  | "files_stddev_fields"
  | "files_stddev_pop_fields"
  | "files_stddev_samp_fields"
  | "files_sum_fields"
  | "files_var_pop_fields"
  | "files_var_samp_fields"
  | "files_variance_fields"
  | "users"
  | "users_aggregate"
  | "users_aggregate_fields"
  | "users_max_fields"
  | "users_min_fields"
  | "users_mutation_response";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  authProviderRequests_constraint: authProviderRequests_constraint | undefined;
  authProviderRequests_select_column:
    | authProviderRequests_select_column
    | undefined;
  authProviderRequests_update_column:
    | authProviderRequests_update_column
    | undefined;
  authProviders_constraint: authProviders_constraint | undefined;
  authProviders_select_column: authProviders_select_column | undefined;
  authProviders_update_column: authProviders_update_column | undefined;
  authRefreshTokens_constraint: authRefreshTokens_constraint | undefined;
  authRefreshTokens_select_column: authRefreshTokens_select_column | undefined;
  authRefreshTokens_update_column: authRefreshTokens_update_column | undefined;
  authRoles_constraint: authRoles_constraint | undefined;
  authRoles_select_column: authRoles_select_column | undefined;
  authRoles_update_column: authRoles_update_column | undefined;
  authUserProviders_constraint: authUserProviders_constraint | undefined;
  authUserProviders_select_column: authUserProviders_select_column | undefined;
  authUserProviders_update_column: authUserProviders_update_column | undefined;
  authUserRoles_constraint: authUserRoles_constraint | undefined;
  authUserRoles_select_column: authUserRoles_select_column | undefined;
  authUserRoles_update_column: authUserRoles_update_column | undefined;
  buckets_constraint: buckets_constraint | undefined;
  buckets_select_column: buckets_select_column | undefined;
  buckets_update_column: buckets_update_column | undefined;
  doc_links_constraint: doc_links_constraint | undefined;
  doc_links_select_column: doc_links_select_column | undefined;
  doc_links_update_column: doc_links_update_column | undefined;
  doc_visits_constraint: doc_visits_constraint | undefined;
  doc_visits_select_column: doc_visits_select_column | undefined;
  doc_visits_update_column: doc_visits_update_column | undefined;
  docs_constraint: docs_constraint | undefined;
  docs_select_column: docs_select_column | undefined;
  docs_update_column: docs_update_column | undefined;
  files_constraint: files_constraint | undefined;
  files_select_column: files_select_column | undefined;
  files_update_column: files_update_column | undefined;
  order_by: order_by | undefined;
  users_constraint: users_constraint | undefined;
  users_select_column: users_select_column | undefined;
  users_update_column: users_update_column | undefined;
}
