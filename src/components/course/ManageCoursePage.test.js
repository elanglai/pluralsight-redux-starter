import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

// === Issue #1 ===
// Invariant Violation: Could not find "store" in either the context or props of "Connect(NanageCoursePage)".
// Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(ManageCoursePage)".
//
// Option 1)
// const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>);
//  Option 2) Preferred.
//   Update ManageCoursePage.js
//      from   class ManageCoursePage extends...
//      to     export class ManageCoursePage extends...
//   update ManageCouursePage.test.js
//      from   import ManageCoursePage from '...
//      to     import {ManageCoursePage} from '...
//
// === Issue #2 ===
// TypeError: Cannot read property 'map' of undefined
//  That's because the mapStateToProps function is not called. To remedy this, set an authors array
//      from   mount(<ManageCoursePage/>
//      to     mount(<ManageCoursePage authors={[]}/>
describe ('Manage Course Page', () => {

  it('set error message when trying to save empty title', () => {

    const props = {
      authors: [],
      actions: {
        // Define a mock for the saveCourse action
        saveCourse: () => {
          return Promise.resolve();
        }
      },
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };


    // unlike shallow, mount create a full DOM of the component and it's child components.
    const wrapper = mount(<ManageCoursePage  {...props}/>);
    // ManageCoursePage is a connected component.  In the logs you get the following error message.

    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');

    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });

});
