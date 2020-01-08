import React, { Component } from "react";
import HydraAdmin from 'api-platform-admin/lib/hydra/HydraAdmin';


class Admin extends Component {
    render() {
        return (
            <div>
                <HydraAdmin entrypoint="http://localhost" />
            </div>
        )
    }
}

export default Admin;