import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './timeline.scss';
import { ReactComponent as WorkIcon } from "../svg/fb.svg";
import './timeline-custom.scss';

export default function Timeline() {
    return (
        <div className="timeline-container">
            <h2 className="heading">My Work Timeline</h2>
            <div className="timeline">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#008DEA', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #008DEA' }}
                        date="Feb 2020 - present"
                        iconStyle={{ background: '#008DEA', color: '#fff' }}
                    >
                        <h2 className="vertical-timeline-element-title">Param.ai</h2>
                        <h5 className="vertical-timeline-element-subtitle"><i>Intelligent Recruiting Software Designed for Efficient Hiring</i></h5>
                        <p>
                            <ul>
                                <li>
                                    Developed and implemented end-to-end tabular UI reports with various feature integration in Vue
                                </li>
                                <li>
                                    Defined and Integrated graphs and charts for better data visualization
                                </li>
                                <li>
                                    Build UI flow with multiple third-party services and integrated with complex internal workflows
                                </li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FAB600', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FAB600' }}
                        date="Apr 2019 - Feb 2020"
                        iconStyle={{ background: '#FAB600', color: '#fff' }}
                    >
                        <h2 className="vertical-timeline-element-title">CreditVidya</h2>
                        <h5 className="vertical-timeline-element-subtitle"><i>With AI and big data technology underwrite first time borrowers profitably</i></h5>
                        <p>
                            <ul>
                                <li>
                                    Designed Scalable and Maintainable user loan journey for mobile in Vue
                                </li>
                                <li>
                                    Implemented VueX to build UI dashboard for Operations, Product and AI team with roles and permissions
                                </li>
                                <li>
                                    Unit tested with Mocha, Chai, Sinon, Karma
                                </li>
                                <li>
                                    Build APIs to fetch dashboard configuration in Java (VertX) from MongoDB
                                </li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1ab23e', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #1ab23e' }}
                        date="May 2018 - Dec 2018"
                        iconStyle={{ background: '#1ab23e', color: '#fff' }}
                    >
                        <h2 className="vertical-timeline-element-title">Mobileways</h2>
                        <h5 className="vertical-timeline-element-subtitle"><i>Bringing your innovative ideas to life! End to End Mobility Services</i></h5>
                        <p>
                            <ul>
                                <li>
                                    Developed multiple small to mid-tier website with React and Redux
                                </li>
                                <li>
                                    End-to-end development of Facade layer for crypto-exchange website
                                </li>
                                <li>
                                    Completed API Testing with Chai/mocha/nock
                                </li>
                                <li>
                                    Documentation using Swagger and API docs
                                </li>
                            </ul>
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                
            </div>
        </div>
    )
}
