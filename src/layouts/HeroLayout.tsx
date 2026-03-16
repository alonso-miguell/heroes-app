import {Outlet} from "react-router";

export const HeroLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-50 to-purple-900">
            <div className="max-w-7xl mx-auto p-6">
                <Outlet />
            </div>
        </div>
    )
}