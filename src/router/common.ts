import { RouteRecordRaw } from "vue-router";
import { errorRoutes } from "./route";

interface Menu {
	path: string;
	component: string;
	name: string;
	title: string;
	icon: string;
	isLink: boolean | number;
	isIframe: boolean | number;
	address: string;
	isAffix: boolean | number;
	isKeepAlive: boolean | number;
	isDisable: boolean | number;
	isHide: boolean | number;
	isHideSubMenu: boolean | number;
	roles: string[];
	children: any[];
}

const viewsModules: any = import.meta.glob("../views/**/**.{vue,tsx}");
const dynamicViewsModules: Record<string, Function> = Object.assign({}, { ...viewsModules });

function routeToComponent(routes: any[]) {
	if (!routes) return [];
	return routes.map((item: any) => {
		if (item.component) item.component = componentImport(dynamicViewsModules, item.component as string);
		item.children && routeToComponent(item.children);
		return item;
	});
}

function componentImport(dynamicViewsModules: Record<string, Function>, component: string) {
	const keys = Object.keys(dynamicViewsModules);
	const matchKeys = keys.filter(key => {
		const k = key.replace(/..\/views|../, "");
		return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
	});
	if (matchKeys?.length === 1) {
		const matchKey = matchKeys[0];
		return dynamicViewsModules[matchKey];
	}
	if (matchKeys?.length > 1) {
		return false;
	}
}

function setRouter(data: Menu[] = []) {
	if (data.length === 0) return [];
	let rootRouter: Array<RouteRecordRaw> = [
		{
			path: "/",
			name: "/",
			redirect: { path: "/" },
			component: () => import("@/views/layout/Index.vue"),
			meta: { title: "message.router.login" },
			children: [],
		},
	];
	let addRouters = [];
	setRouterItem(addRouters, data, "");
	rootRouter[0].children = routeToComponent(addRouters);
	rootRouter[0].children = [...rootRouter[0].children, ...errorRoutes];
	return rootRouter;
}

function setRouterItem(routerList: any, data: Menu[] = [], parentPath: string = "") {
	if (data.length === 0) return [];
	data.forEach((item: any) => {
		let path = parentPath + "/" + item.path;
		let name = item.component.slice(item.component.lastIndexOf("/") + 1);
		let route: RouteRecordRaw = {
			path: path,
			name: name,
			component: item.component,
			meta: {
				title: item.title,
				name: item.name,
				icon: item.icon,
				isLink: item.isLink,
				isHide: item.isHide,
				isKeepAlive: item.isKeepAlive,
				isAffix: item.isAffix,
				isIframe: item.isIframe,
				roles: item.roles,
			},
		};
		if (item.children && item.children.length > 0) {
			// ??????????????????????????????????????????????????????????????????????????????????????????
			// if (!o.isHideSubMenu) {
			// 	o.address = { name: o.children[0].path };
			// }
			routerList.push(route);
			setRouterItem(routerList, item.children, path);
		} else {
			routerList.push(route);
		}
	});
}

// ????????????????????????
export default {
	// ??????????????????
	isAdminIframe: true,
	// ???????????????????????????
	isRequestRoutes: true,
	routeLogin: "/login",
	routeRoot: "/",
	routeHome: "/home",
	whiteList: ["/login", "/register", "/auth"],
	executeList: ["/login", "/register", "/auth", "/home", "/", "/401", "/404", "/500"],
	rolesSuper: ["admin", "common"],
	rolesAdmin: ["admin"],
	rolesUser: ["common"],
	getRouter: (data: any[]) => {
		return setRouter(data);
	},
};
