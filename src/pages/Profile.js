import { Fragment } from "react";
import React from "react";
import "./Profile.css";
import {profileData} from "../data/ProfileData.js";
import CardProfile from "../component/CardProfile.js"; 

export default function Profile() {
  return (
    <>
      <div className="profile-title centered-title">
                {profileData.map((data, index) => (
                  <Fragment key={data.id}>
                  <CardProfile 
                    name={data.name} 
                    img={data.img} 
                    nim={data.nim} 
                  />
                  {profileData.length === index + 1 && <div style={{ marginBottom: 80 }} />}
              </Fragment>
          ))}
      </div>
    </>
  );
}