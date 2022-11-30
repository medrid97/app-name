import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import "../../styles/SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../layout/Loader";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, deleteCourse } from "../../actions/courseActions";
import { DELETE_COURSE_RESET } from "../../constants/courseConstants";

const CoursesList = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, courses } = useSelector((state) => state.courses);
  const { isDeleted } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourses());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Course deleted successfully");
      history.push("/admin/courses");
      dispatch({ type: DELETE_COURSE_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const setCourses = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        //  {
        //      label: 'Price',
        //      field: 'price',
        //      sort: 'asc'
        //  },
        //  {
        //    label: 'Stock',
        //  field: 'stock',
        // sort: 'asc'
        // },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    courses.forEach((course) => {
      data.rows.push({
        id: course._id,
        name: course.name,
        //price: `$${product.price}`,
        //stock: product.stock,
        actions: (
          <Fragment>
            <Link
              to={`/admin/course/${course._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteCourseHandler(course._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteCourseHandler = (id) => {
    dispatch(deleteCourse(id));
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Courses</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setCourses()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursesList;
