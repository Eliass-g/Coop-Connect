import * as React from "react";
import styled from "styled-components";
import ProfileForm from "./Components/ProfileForm";
import NavBar from "./Components/NavBar";
import {
    MainContainer,
    ProfileContainer,
    RightContainer,
} from "./Styling/Profile.styles";
import { usePage, Link } from "@inertiajs/react";

export default function Profile() {
    const { props } = usePage();
    const { user } = props;
    return (
        <NavBar header="My Profile">
            <MainContainer>
                <ProfileContainer>
                    <ProfileForm user={user} />
                </ProfileContainer>
                {/* <RightContainer>
                    <Matches />
                    <ReflectionDocuments />
                </RightContainer> */}
            </MainContainer>
        </NavBar>
    );
}
