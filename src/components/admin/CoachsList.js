import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import "../../styles/SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "../layout/Loader";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getCoachs, deleteCoach } from "../../actions/coachActions";
import { DELETE_COACH_RESET } from "../../constants/coachConstants";

const CoachsList = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, coachs } = useSelector((state) => state.coachs);
  const { isDeleted } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getCoachs());

    if (error) {
      alert(error);
    }

    if (isDeleted) {
      alert("Coach deleted successfully");
      history.push("/admin/coachs");
      dispatch({ type: DELETE_COACH_RESET });
    }
  }, [dispatch, alert, error, isDeleted, history]);

  const setCoachs = () => {
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

    coachs.forEach((coach) => {
      data.rows.push({
        id: coach._id,
        name: coach.name,
        //price: `$${product.price}`,
        //stock: product.stock,
        actions: (
          <Fragment>
            <Link
              to={`/admin/coach/${coach._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteCoachHandler(coach._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteCoachHandler = (id) => {
    dispatch(deleteCoach(id));
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Coachs</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setCoachs()}
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

export default CoachsList;
