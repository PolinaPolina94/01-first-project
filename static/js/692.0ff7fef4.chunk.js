"use strict";(self.webpackChunk_01_first_project=self.webpackChunk_01_first_project||[]).push([[692],{8692:function(t,s,e){e.r(s),e.d(s,{default:function(){return z}});var r=e(5671),n=e(3144),i=e(136),o=e(2882),a=e(8683),u=e(2791),c=e(6070),l=e(2982),p="MyPosts_foto__Wy-Tv",d="Post_item__tQYGj",f=e(184),h=function(t){return(0,f.jsxs)("div",{className:"cla",children:[(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:"https://i1.sndcdn.com/artworks-1W1ucUu0AroJKisi-8sy04w-t500x500.jpg"}),t.message]}),(0,f.jsx)("span",{children:"likes"}),"  ",t.likesCount]})},j=e(6139),x=e(704),v=e(5304),m=e(5558),g=(0,v.D)(10),P=u.memo((function(t){console.log("render");var s=(0,l.Z)(t.postsData).reverse().map((function(t){return(0,f.jsx)(h,{message:t.message,likesCount:t.likesCount})}));return(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:" My posts"}),(0,f.jsx)(_,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,f.jsx)("div",{className:p,children:s})]})})),_=function(t){return(0,f.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,f.jsx)(j.Z,{component:m.g,name:"newPostText",placeholder:"Your post",value:t.newPostText,validate:[v.C,g]}),(0,f.jsxs)("div",{children:[" ",(0,f.jsx)("button",{children:" New post"})]})]})};_=(0,x.Z)({form:"PropfileAddPostForm"})(_);var Z=P,U=e(8687),k=(0,U.$j)((function(t){return{postsData:t.profailPage.postsData,newPostText:t.profailPage.newPostText}}),(function(t){return{addPost:function(s){t((0,c.Wl)(s))}}}))(Z),w=e(2522),S="ProfileInfo_foto__Qiy2A",C="ProfileInfo_avatar__qPxne",b="ProfileInfo_links__Zr2qX",y=e(885),A=function(t){var s=(0,u.useState)(!1),e=(0,y.Z)(s,2),r=e[0],n=e[1],i=(0,u.useState)(t.status),o=(0,y.Z)(i,2),a=o[0],c=o[1];(0,u.useEffect)((function(){c(t.status)}),[t.status]);return(0,f.jsxs)("div",{children:[!r&&(0,f.jsx)("div",{children:(0,f.jsxs)("span",{onDoubleClick:function(){n(!0)},children:[" ",t.status||"no status"," "]})}),r&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateUserStatus(a)},value:a})})]})},D=function(t){return t.profile?(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:S,children:(0,f.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWi7T29K2PWoVqpH-DCi12Cbs5r5VDzeVhBw&usqp=CAU",alt:"cat"})}),(0,f.jsxs)("div",{className:C,children:[(0,f.jsx)("img",{src:t.profile.photos.large,alt:"avatar_photo"}),(0,f.jsxs)("div",{children:[" ",(0,f.jsx)(A,{status:t.status,updateUserStatus:t.updateUserStatus})," "]}),(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("a",{href:"https://twitter.com",children:t.profile.contacts.twitter}),(0,f.jsx)("a",{href:"https://vk.com/",children:t.profile.contacts.vk}),(0,f.jsx)("a",{href:"https://www.instagram.com/",children:t.profile.contacts.instagram}),(0,f.jsx)("a",{href:"https://github.com/",children:t.profile.contacts.github})]})]})]}):(0,f.jsx)(w.Z,{})},T=function(t){return(0,f.jsxs)("div",{children:[(0,f.jsx)(D,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),(0,f.jsx)(k,{})]})},N=e(6871),q=e(7781),I=e(1548);var W=function(t){(0,i.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,r.Z)(this,e),s.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.autorizedUserId),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return(0,f.jsx)(T,(0,a.Z)((0,a.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),e}(u.Component),z=(0,q.qC)((0,U.$j)((function(t){return{profile:t.profailPage.profile,status:t.profailPage.status,autorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:c.et,getUserStatus:c.Tq,updateUserStatus:c.OL}),(function(t){return function(s){var e=(0,N.TH)(),r=(0,N.s0)(),n=(0,N.UO)();return(0,f.jsx)(t,(0,a.Z)((0,a.Z)({},s),{},{router:{location:e,navigate:r,params:n}}))}}),I.D)(W)},1548:function(t,s,e){e.d(s,{D:function(){return f}});var r=e(8683),n=e(5671),i=e(3144),o=e(136),a=e(2882),u=e(2791),c=e(6871),l=e(8687),p=e(184),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var s=function(s){(0,o.Z)(u,s);var e=(0,a.Z)(u);function u(){return(0,n.Z)(this,u),e.apply(this,arguments)}return(0,i.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(t,(0,r.Z)({},this.props)):(0,p.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)(d)(s)}}}]);
//# sourceMappingURL=692.0ff7fef4.chunk.js.map