export default function ({app, route, redirect}){
     if(route.path === '/login' || route.path === '/' || route.path === '/signup'){
        if (!app.$fire.auth.currentUser) {
            //Stay on page
        } else {
            return redirect('/board')
        }
    } else if(route.path === '/board'){
        if (!app.$fire.auth.currentUser) {
            //Redirect to login page
            return redirect('/login')
        } 
    }
}