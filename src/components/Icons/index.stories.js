import React, { Fragment } from 'react';
import Icon from '../../utils/icon';

export default { title: 'Icons' };

export const allIcons = () => (
    <Fragment>
        <table border="1px solid black" style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center', fontSize: '20px', tableLayout: 'fixed' }}>
            <tbody>
                <tr>
                    <td>
                        <Icon icon="facebook" size={30} />
                    </td>
                    <td>
                        <Icon icon="twitter" size={30} />
                    </td>
                    <td>
                        <Icon icon="google" size={30} />
                    </td>
                    <td>
                        <Icon icon="calendar" size={30} />
                    </td>
                    <td>
                        <Icon icon="cross2" size={30} />
                    </td>
                    <td>
                        <Icon icon="acceptchecked" size={30} />
                    </td>
                </tr>
                <tr>
                    <td>facebook</td>
                    <td>twitter</td>
                    <td>google</td>
                    <td>calendar</td>
                    <td>cross2</td>
                    <td>acceptchecked</td>
                </tr>
                <tr>
                    <td>
                        <Icon icon="cross" size={30} />
                    </td>
                    <td>
                        <Icon icon="dot" size={30} />
                    </td>
                    <td>
                        <Icon icon="tick" size={30} />
                    </td>
                    <td>
                        <Icon icon="plus" size={30} />
                    </td>
                    <td>
                        <Icon icon="account" size={30} />
                    </td>
                    <td>
                        <Icon icon="3dot" size={30} />
                    </td>
                </tr>
                <tr>
                    <td>cross</td>
                    <td>dot</td>
                    <td>tick</td>
                    <td>plus</td>
                    <td>account</td>
                    <td>3dot</td>
                </tr>
                <tr>
                    <td>
                        <Icon icon="settings" size={30} />
                    </td>
                    <td>
                        <Icon icon="cboxuncheck" size={30} />
                    </td>
                    <td>
                        <Icon icon="cboxdelete" size={30} />
                    </td>
                    <td>
                        <Icon icon="loading" size={30} />
                    </td>
                    <td>
                        <Icon icon="downarrow" size={30} />
                    </td>
                    <td>
                        <Icon icon="rightarrow" size={30} />
                    </td>
                </tr>
                <tr>
                    <td>settings</td>
                    <td>cboxuncheck</td>
                    <td>cboxdelete</td>
                    <td>loading</td>
                    <td>downarrow</td>
                    <td>rightarrow</td>
                </tr>
                <tr>
                    <td>
                        <Icon icon="leftarrow" size={30} />
                    </td>
                    <td>
                        <Icon icon="uparrow" size={30} />
                    </td>
                    <td>
                        <Icon icon="edit1" size={30} />
                    </td>
                    <td>
                        <Icon icon="edit2" size={30} />
                    </td>
                    <td>
                        <Icon icon="edit3" size={30} />
                    </td>
                    <td>
                        <Icon icon="tag" size={30} />
                    </td>
                </tr>
                <tr>
                    <td>leftarrow</td>
                    <td>uparrow</td>
                    <td>edit1</td>
                    <td>edit2</td>
                    <td>edit3</td>
                    <td>tag</td>
                </tr>
                <tr>
                    <td>
                        <Icon icon="exit" size={30} />
                    </td>
                    <td>
                        <Icon icon="hashtag" size={30} />
                    </td>
                    <td>
                        <Icon icon="cboxchecked2" size={30} />
                    </td>
                    <td>
                        <Icon icon="horizontal" size={30} />
                    </td>
                    <td>
                        <Icon icon="vertical" size={30} />
                    </td>
                    <td>
                        <Icon icon="box" size={30} />
                    </td>
                </tr>
                <tr>
                    <td>exit</td>
                    <td>hashtag</td>
                    <td>cboxchecked2</td>
                    <td>horizontal</td>
                    <td>vertical</td>
                    <td>box</td>
                </tr>
                <tr>
                    <td>
                        <Icon icon="list" size={30} />
                    </td>
                    <td>
                        <Icon icon="bell" size={30} />
                    </td>
                    <td>
                        <Icon icon="acceptunchecked" size={30} />
                    </td>
                    <td>
                        <Icon icon="clock" size={30} />
                    </td>
                    <td>
                        <Icon icon="search" size={30} />
                    </td>
                    <td>
                        <Icon icon="password" size={30} />
                    </td>
                </tr>
                <tr>
                    <td>list</td>
                    <td>bell</td>
                    <td>acceptunchecked</td>
                    <td>clock</td>
                    <td>search</td>
                    <td>password</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
);
