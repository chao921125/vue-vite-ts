/**
 * 定义接口来定义对象的类型
 * `stores` 全部类型定义在这里
 */

// 用户信息
export interface UserInfoState {
	authBtnList: string[];
	avatar: string;
	roles: string[];
	time: number;
	userName: string;
	id: string;
}
export interface UserInfoStates {
	userInfo: UserInfoState;
}

// 路由缓存列表
export interface KeepAliveNamesState {
	keepAliveNames: string[];
	cachedViews: string[];
}

// 后端返回原始路由(未处理时)
export interface RequestOldRoutesState {
	requestOldRoutes: string[];
}

// TagsView 路由列表
export interface TagsViewRoutesState {
	tagsViewRoutes: string[];
	isTagsViewCurrenFull: Boolean;
}

// 路由列表
export interface RoutesListState {
	routesList: string[];
	isColumnsMenuHover: Boolean;
	isColumnsNavHover: Boolean;
}

// 布局配置
export interface ThemeConfigState {

}
export interface ThemeConfigStates {
	themeConfig: ThemeConfigState;
}
