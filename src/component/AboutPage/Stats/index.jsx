import React from 'react';

export default function Stats() {
    return (
          <div className="position-relative w-75 vh-100 d-flex bg-white">
          <div className="members">
              <div className="today">
              <h3>TODAY</h3>
              </div>
              <div className="membersInfo">
                <div className="membersInfo-Members">
                  <h1>Members</h1>
                  <p>135</p>
                </div>
                <div className="membersInfo-Clients">
                  <h1>Clients</h1>
                  <p>47</p>
                </div>
                <div className="membersInfo-Teams">
                  <h1>Teams</h1>
                  <p>22</p>
                </div>
                <div className="membersInfo-Roles">
                  <h1>Roles</h1>
                  <p>44</p>
                </div>
              </div>
            </div>
            </div>
        
    );
  }
  