import React, { Component } from 'react'
import { LinkedinFilled, MailOutlined, TwitterCircleFilled, WhatsAppOutlined } from '@ant-design/icons';

class contact extends Component {
    render() {
        return (
            <div className='contact-container'>
                <ul class="list-group">
                    <li class="list-group-item d-flex align-items-center">
                        <MailOutlined />
                        <span>
                            <a class="nav-link active" target='_location' href='https://www.linkedin.com/in/prakharpatidar987'>Mail</a>
                        </span>
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                        <LinkedinFilled />
                        <span>
                            <a class="nav-link active" target='_location' href='https://www.linkedin.com/in/prakharpatidar987'>LinkedIn</a>
                        </span>
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                        <TwitterCircleFilled />
                        <span>
                            <a class="nav-link active" target='_location' href='https://twitter.com/prakhar_987'>Twitter</a>
                        </span>
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                        <WhatsAppOutlined />
                        <span>
                            <a class="nav-link active" target='_location' href='https://web.whatsapp.com/'>Whatsapp</a>
                        </span>
                    </li>
                </ul>

            </div>
        )
    }
}

export default contact