import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// @ts-ignore
// @ts-ignore
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/login/serviceAgree",
    component: () => import("@/views/login/serviceAgree.vue"),
  },
  {
    path: "/login/privacyPolicy",
    component: () => import("@/views/login/privacyPolicy.vue"),
  },
  {
    path: "/task",
    component: () => import("@/views/task/index.vue"),
  },
  {
    path: "/task/search",
    component: () => import("@/views/task/search.vue"),
  },
  {
    path: "/task/details",
    component: () => import("@/views/task/details.vue"),
  },
  {
    path: "/task/companySource",
    component: () => import("@/views/task/companySource.vue"),
  },
  {
    path: "/contract",
    component: () => import("@/views/contract/index.vue"),
  },
  {
    path: "/contract/details/:id",
    component: () => import("@/views/contract/details.vue"),
  },
  {
    path: "/contract/progress/:id",
    component: () => import("@/views/contract/progress.vue"),
  },
  {
    path: "/message",
    component: () => import("@/views/message/index.vue"),
  },
  {
    path: "/message/systemList",
    component: () => import("@/views/message/systemList.vue"),
  },
  {
    path: "/message/systemDetails/:id",
    component: () => import("@/views/message/systemDetails.vue"),
  },
  {
    path: "/message/talk/:taskId/:userId",
    component: () => import("@/views/message/talk.vue"),
  },
  {
    path: "/message/talent/:resumeId/:userId",
    component: () => import("@/views/message/talent.vue"),
  },
  {
    path: "/my",
    component: () => import("@/views/my/index.vue"),
  },
  {
    path: "/my/user",
    component: () => import("@/views/my/user/index.vue"),
  },
  {
    path: "/my/user/authReal",
    component: () => import("@/views/my/user/authReal.vue"),
  },
  {
    path: "/my/user/certified",
    component: () => import("@/views/my/user/certified.vue"),
  },
  {
    path: "/my/company/authReal",
    component: () => import("@/views/my/company/authReal.vue"),
  },
  {
    path: "/my/company/certified",
    component: () => import("@/views/my/company/certified.vue"),
  },
  {
    path: "/my/user/identitySwitch",
    component: () => import("@/views/my/user/identitySwitch.vue"),
  },
  {
    path: "/my/set",
    component: () => import("@/views/my/set/index.vue"),
  },
  {
    path: "/my/feedback",
    component: () => import("@/views/my/feedback/index.vue"),
  },
  {
    path: "/my/account",
    component: () => import("@/views/my/account/index.vue"),
  },
  {
    path: "/my/account/advance",
    component: () => import("@/views/my/account/advance.vue"),
  },
  {
    path: "/my/account/coinExplain",
    component: () => import("@/views/my/account/coinExplain.vue"),
  },
  {
    path: "/my/account/depositExplain",
    component: () => import("@/views/my/account/depositExplain.vue"),
  },
  {
    path: "/my/resume",
    component: () => import("@/views/my/resume/index.vue"),
  },
  {
    path: "/my/resume/preview",
    component: () => import("@/views/my/resume/preview.vue"),
  },
  {
    path: "/my/contract/:id",
    component: () => import("@/views/my/contract/index.vue"),
  },
  {
    path: "/my/contract/add",
    component: () => import("@/views/my/contract/add.vue"),
  },
  {
    path: "/my/collect",
    component: () => import("@/views/my/collect/index.vue"),
  },
  {
    path: "/my/collect/talent",
    component: () => import("@/views/my/collect/talent.vue"),
  },
  {
    path: "/my/about",
    component: () => import("@/views/my/about/index.vue"),
  },
  {
    path: "/my/partner/person",
    component: () => import("@/views/my/partner/person.vue"),
  },
  {
    path: "/my/partner/company",
    component: () => import("@/views/my/partner/company.vue"),
  },
  {
    path: "/my/partner/admin",
    component: () => import("@/views/my/partner/admin.vue"),
  },
  {
    path: "/my/task",
    component: () => import("@/views/my/task/index.vue"),
  },
  {
    path: "/my/task/add",
    component: () => import("@/views/my/task/add.vue"),
  },
  {
    path: "/my/task/details/:id",
    component: () => import("@/views/my/task/details.vue"),
  },
  {
    path: "/my/coupon",
    component: () => import("@/views/my/coupon/index.vue"),
  },
  {
    path: "/my/coupon/rule",
    component: () => import("@/views/my/coupon/rule.vue"),
  },
  {
    path: "/talent",
    component: () => import("@/views/talent/index.vue"),
  },
  {
    path: "/talent/search",
    component: () => import("@/views/talent/search.vue"),
  },
  {
    path: "/talent/details/:id",
    component: () => import("@/views/talent/details.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 解决路由跳转后回到顶部
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
