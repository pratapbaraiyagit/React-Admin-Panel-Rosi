import React, { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/auth';
import ChangePassword from '../pages/ChangePassword';
import InCharitys from '../pages/Master/Charitys';
import ForgotPassword from '../pages/ForgotPassword';
import Registration from '../pages/Registration';
import { useDispatch } from 'react-redux';
import { storeMetaData } from '../actions/meta';


const Layout = lazy(() => import('../components/layout'))
const SignIn = lazy(() => import('../pages/SignIn'))
const Dashboard = lazy(() => import('../pages/Dashboard'))

const Master = lazy(() => import('../pages/Master'))
const MasterView = lazy(() => import('../pages/Master/view'))

const CharityViews = lazy(() => import('../pages/Master/Charitys/view'))
const CharityEdit = lazy(() => import('../pages/Master/Charitys/edit'))
const CharityAdd = lazy(() => import('../pages/Master/Charitys/add'))

const CharityCategory = lazy(() => import('../pages/Master/CharityCategory'))
// const CauseAdd = lazy(() => import('../pages/Master/Cause/add'))
// const CauseViews = lazy(() => import('../pages/Master/Cause/view'))
// const CauseEdit = lazy(() => import('../pages/Master/Cause/edit'))

const Cause = lazy(() => import('../pages/Master/Cause'))
const CauseAdd = lazy(() => import('../pages/Master/Cause/add'))
const CauseViews = lazy(() => import('../pages/Master/Cause/view'))
const CauseEdit = lazy(() => import('../pages/Master/Cause/edit'))

const Community = lazy(() => import('../pages/Community'))
const CommunityAdd = lazy(() => import('../pages/Community/add'))
const CommunityView = lazy(() => import('../pages/Community/view'))
const CommunityEdit = lazy(() => import('../pages/Community/edit'))

const Chome = lazy(() => import('../pages/Content/home'))
const Policy = lazy(() => import('../pages/Content/policy'))
const Terms = lazy(() => import('../pages/Content/terms'))
const About = lazy(() => import('../pages/Content/about'))

const Leadership = lazy(() => import('../pages/Content/leadership'))
const AddLeadership = lazy(() => import('../pages/Content/leadership/add'))
const EditLeadership = lazy(() => import('../pages/Content/leadership/edit'))
const ViewLeadership = lazy(() => import('../pages/Content/leadership/view'))



const Routing = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storeMetaData());
    }, []);
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/charity-signin" element={<SignIn charityAdmin={true} />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<AuthGuard><Layout /></AuthGuard>}>
                <Route index path="/dashboard" element={<Dashboard />} />

                {/* master */}
                <Route index path="/master" element={<Master />} />
                <Route index path="/master/master_view/:id" element={<MasterView />} />

                {/* Charitys */}
                <Route index path="/master/charity_management" element={<InCharitys />} />
                <Route index path="/master/charity_add" element={<CharityAdd />} />
                <Route index path="/master/charity_edit/:id" element={<CharityEdit />} />
                <Route index path="/master/charity_views" element={<CharityViews />} />

                {/* Charity Category */}
                <Route index path="/master/charity_category_management" element={<CharityCategory />} />
                <Route index path="/cause/cause_edit/:id" element={<CauseEdit />} />
                <Route index path="/cause/cause_view" element={<CauseViews />} />
                <Route index path="/cause/cause_add" element={<CauseAdd />} />

                {/* cause */}
                <Route index path="/master/cause_management" element={<Cause />} />
                <Route index path="/cause/cause_edit/:id" element={<CauseEdit />} />
                <Route index path="/cause/cause_view" element={<CauseViews />} />
                <Route index path="/cause/cause_add" element={<CauseAdd />} />

                {/* Community */}
                <Route index path="/community" element={<Community />} />
                <Route index path="/community/community_add" element={<CommunityAdd />} />
                <Route index path="/community/community_edit" element={<CommunityEdit />} />
                <Route index path="/community/Community_view" element={<CommunityView />} />

                {/* Content */}
                <Route index path="/content_management/homepage" element={<Chome />} />
                <Route index path="/content_management/privacy_policy" element={<Policy />} />
                <Route index path="/content_management/terms_condition" element={<Terms />} />
                <Route index path="/content_management/about_us" element={<About />} />

                {/* Leadership */}
                <Route index path="/content_management/leadership" element={<Leadership />} />
                <Route index path="/content_management/add_leadership" element={<AddLeadership />} />
                <Route index path="/content_management/edit_leadership" element={<EditLeadership />} />
                <Route index path="/content_management/view_leadership" element={<ViewLeadership />} />

                <Route path="/" element={<Navigate replace to="/dashboard" />} />
            </Route>
            <Route path="*" element={<Navigate replace to="/signin" />} />
        </Routes>
    );
}

export default Routing;