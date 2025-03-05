import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom';
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollment from './pages/student/MyEnrollment';
import Player from './pages/student/Player';
import Loading from './Component/student/Loading';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import StudentEnrolled from './pages/educator/StudentEnrolled';
import MyCourses from './pages/educator/MyCourses';
import Navbar from './Component/student/navbar';

const App = () => {
  const isEducatorRoute = useMatch("/educator/*")
  return (
    <div className='text-default min-h-screen bg-white'>
      {
        !isEducatorRoute && <Navbar />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:courseId' element={<CourseDetails />} />
        <Route path='/my-enrollment' element={<MyEnrollment />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:pth' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='student-enrolled' element={<StudentEnrolled />} />
          <Route path='my-courses' element={<MyCourses />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
