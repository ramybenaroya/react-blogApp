import {Component} from 'react';
import {Header} from './header';

export const Admin = () => (
                    <section className="col-md-8">
                        <h2 className="page-header">Edit posts</h2>
                        <table className="table table-bordered table-hover table-striped postsTable">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>
                                    Title
                    <span className="pull-right">
                      {/* <i class="glyphicon glyphicon-chevron-down"></i> */}
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
                                </th>
                                <th>
                                    Author
                    <span className="pull-right">
                      {/* <i class="glyphicon glyphicon-chevron-down"></i> */}
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
                                </th>
                                <th>
                                    Date
                    <span className="pull-right">
                      <i className="glyphicon glyphicon-chevron-down"/>
                        {/* <i class="glyphicon glyphicon-chevron-up"></i> */}
                    </span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>AngularJS - Controllers</td>
                                <td>Ilan Cohen</td>
                                <td>14 Jan, 2015</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>AngularJS - Modules</td>
                                <td>Ilan Cohen</td>
                                <td>14 Jan, 2015</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>AngularJS - Routes</td>
                                <td>Ilan Cohen</td>
                                <td>14 Jan, 2015</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>AngularJS - Services</td>
                                <td>Ilan Cohen</td>
                                <td>14 Jan, 2015</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Grunt - Custom Tasks</td>
                                <td>Alex Ilyaev</td>
                                <td>10 Dec, 2014</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Grunt - Intro</td>
                                <td>Alex Ilyaev</td>
                                <td>10 Dec, 2014</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>jQuery - Events, AJAX</td>
                                <td>Amit Choukroun</td>
                                <td>3 Dec, 2014</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>jQuery - Selectors, DOM</td>
                                <td>Amit Choukroun</td>
                                <td>1 Dec, 2014</td>
                            </tr>
                            </tbody>
                        </table>
                        <footer>
                            <a className="btn btn-primary" href="#">Add New Post</a>
                        </footer>
                    </section>)

