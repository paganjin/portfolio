import React from 'react';

const HomePage = () => {
    <div id="HOME" class="page page--active">
            <div class="page__header homepage__header">
                <div class="homepage__title">
                    <h2 class="homepage__title">Tifa Lockhart</h2>
                    <div class="homepage__position">Final Fantasy VII</div>
                    <div class="homepage__socialMedias">
                        <i class="fab fa-twitter homepage__socialMediaItem"></i>
                        <i class="fab fa-facebook-f homepage__socialMediaItem"></i>
                        <i class="fab fa-instagram homepage__socialMediaItem"></i>
                    </div>
                </div>
            </div>
            <div class="page__content homepage__content">
                <div>
                    <h3 class="aboutMeHeader">
                        About
                        <span class="homepage__aboutMeHeaderHighlight">Me</span>
                    </h3>
                    <div class="homepage__aboutMeContent">
                        Bright and optimistic, Tifa always cheers up the others when they're down.
                    </div>
                </div>
                <table class="homepage__contact">
                    <tr>
                        <td>Age</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Residence</td>
                        <td>Gaia</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>Level 6, 461 Bourke St, Melbourne VIC 3000</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <a href="mailto:ohjinjinjin@gmail.com">
                                info@gmail.com
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>+61 478 786 480</td>
                    </tr>
                </table>
            </div>
        </div>
};

export default HomePage;