import { useEffect } from "react";
import "./styles/styles.scss";
import "swiper/css/effect-fade";

import { tabs } from "@/utlis/tabs";

import SearchModal from "@/components/modals/SearchModal";
import MobileMenu from "@/components/modals/MobileMenu";
import Context from "@/context/Context";
import BackToTop from "@/components/common/BackToTop";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollToToBehaviour";
import HomePage1 from "./pages/homes/home-01";
import WOW from "./utlis/wow";
import HomePage2 from "./pages/homes/home-02";
import HomePage3 from "./pages/homes/home-03";
import HomePage4 from "./pages/homes/home-04";
import HomePage5 from "./pages/homes/home-05";
import HomePage6 from "./pages/homes/home-06";
import HomePage7 from "./pages/homes/home-07";
import HomePage8 from "./pages/homes/home-08";
import HomePage9 from "./pages/homes/home-09";
import HomePage10 from "./pages/homes/home-10";
import CourseGridBasicPage from "./pages/course-list/course-grid-basic";
import CourseGridModernPage from "./pages/course-list/course-grid-modern";
import CourseGridLeftSidebarPage from "./pages/course-list/course-grid-left-sidebar";
import CourseGridRightSidebarPage from "./pages/course-list/course-grid-right-sidebar";
import CourseListSidebarPage from "./pages/course-list/course-list-sidebar";
import AllListStylePage from "./pages/course-list/all-list-style";
import CourseSinglePage1 from "./pages/course-single/course-single-v1";
import CourseSinglePage2 from "./pages/course-single/course-single-v2";
import CourseSinglePage3 from "./pages/course-single/course-single-v3";
import CourseSinglePage4 from "./pages/course-single/course-single-v4";
import CourseSinglePage5 from "./pages/course-single/course-single-v5";
import CategoriesPage from "./pages/course-list/categories";
import InstractorListPage from "./pages/other-pages/instructor-list";
import InstractorSinglePage from "./pages/other-pages/instructor-single";
import BecomeTeacherPage from "./pages/other-pages/become-teacher";
import EventListPage from "./pages/other-pages/event-list";
import EventSinglePage from "./pages/other-pages/event-single";
import AboutPage from "./pages/other-pages/about";
import ContactPage from "./pages/other-pages/contact";
import HelpCenterPage from "./pages/other-pages/help-center";
import PricingPage from "./pages/other-pages/pricing";
import FaqPage from "./pages/other-pages/faq";
import TermsPage from "./pages/other-pages/terms";
import PageNotFoundPage from "./pages/other-pages/page-not-found";
import LoginPage from "./pages/other-pages/login";
import RegisterPage from "./pages/other-pages/register";
import InstractorPageDashBoard from "./pages/dashboard/instructor-dashboard";
import StudentPageDashboard from "./pages/dashboard/student-dashboard";
import UiElementsPage from "./pages/other-pages/ui-elements";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogListPage1 from "./pages/blogs/blog-list-v1";
import BlogListPage2 from "./pages/blogs/blog-list-v2";
import BlogSinglePage from "./pages/blogs/blog-single";
import ShopListPage from "./pages/shop/shop-list";
import ShopSinglePage from "./pages/shop/shop-single";
import ShopCartPage from "./pages/shop/shop-cart";
import ShopCheckoutPage from "./pages/shop/shop-checkout";
import ShopOrderPage from "./pages/shop/shop-order";
import InstractorPageMyCourses from "./pages/dashboard/instructor-my-courses";
import InstractorPageReviews from "./pages/dashboard/instructor-reviews";
import InstractorPageWishlist from "./pages/dashboard/instructor-wishlist";
import InstractorPageQuizzes from "./pages/dashboard/instructor-quizzes";
import InstractorPageOrder from "./pages/dashboard/instructor-order";
import InstractorPageSettings from "./pages/dashboard/instructor-setting";
import StudentPageMyCourses from "./pages/dashboard/student-my-courses";
import StudentPageReviews from "./pages/dashboard/student-reviews";
import StudentPageWishlist from "./pages/dashboard/student-wishlist";
import StudentPageQuizzes from "./pages/dashboard/student-quizzes";
import StudentPageOrder from "./pages/dashboard/student-order";
import StudentPageSettings from "./pages/dashboard/student-setting";
import InstractorPageAddCourse from "./pages/dashboard/instructor-add-course";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
      // setTimeout(() => {
      //   import("../utlis/mmenu").then(() => {
      //     // Module is imported, you can access any exported functionality if
      //     new window.Mmenu(document.querySelector("#menu"));
      //   });
      // }, 200);
    }
  }, []);
  useEffect(() => {
    tabs();
    const collapseTitles = document.querySelectorAll(".tf-collapse-title");
    const collapseTitem = document.querySelectorAll(".tf-collapse-item");
    collapseTitem.forEach((elm) => {
      const content = elm.querySelector(".tf-collapse-content");
      if (elm.classList.contains("collapsed")) {
        content.style.height = "0px";
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });

    const clickHandler = function (event) {
      const parentItem = event.target.closest(".tf-collapse-item");
      const content = parentItem.querySelector(".tf-collapse-content");

      // Toggle collapsed class
      parentItem.classList.toggle("collapsed");

      if (parentItem.classList.contains("collapsed")) {
        content.style.transition = "0.5s";
        content.style.height = "0px";
      } else {
        content.style.transition = "0.5s";
        content.style.height = content.scrollHeight + "px";
      }
    };

    collapseTitles.forEach((title) => {
      title.addEventListener("click", clickHandler);
    });

    // Cleanup event listeners on component unmount
    return () => {
      collapseTitles.forEach((title) => {
        title.removeEventListener("click", clickHandler);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (header) {
        if (currentScrollY > 250) {
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            header.style.top = "-100px";
          } else {
            // Scrolling up
            header.style.top = "0px";
          }
        } else {
          // Below 250px
          header.style.top = "-100px";
        }

        lastScrollY.current = currentScrollY;
      }
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Dynamically import bootstrap when the route changes
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap:", err);
      });
  }, [pathname]); // Runs every time the route changes

  return (
    <>
      <Context>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage1 />} />
            <Route path="home-02" element={<HomePage2 />} />
            <Route path="home-03" element={<HomePage3 />} />
            <Route path="home-04" element={<HomePage4 />} />
            <Route path="home-05" element={<HomePage5 />} />
            <Route path="home-06" element={<HomePage6 />} />
            <Route path="home-07" element={<HomePage7 />} />
            <Route path="home-08" element={<HomePage8 />} />
            <Route path="home-09" element={<HomePage9 />} />
            <Route path="home-10" element={<HomePage10 />} />

            <Route path="course-grid-basic" element={<CourseGridBasicPage />} />
            <Route
              path="course-grid-modern"
              element={<CourseGridModernPage />}
            />
            <Route
              path="course-grid-left-sidebar"
              element={<CourseGridLeftSidebarPage />}
            />
            <Route
              path="course-grid-right-sidebar"
              element={<CourseGridRightSidebarPage />}
            />
            <Route
              path="course-list-sidebar"
              element={<CourseListSidebarPage />}
            />
            <Route path="all-list-style" element={<AllListStylePage />} />

            <Route
              path="course-single-v1/:id"
              element={<CourseSinglePage1 />}
            />
            <Route path="course-single-v2" element={<CourseSinglePage2 />} />
            <Route path="course-single-v3" element={<CourseSinglePage3 />} />
            <Route path="course-single-v4" element={<CourseSinglePage4 />} />
            <Route path="course-single-v5" element={<CourseSinglePage5 />} />
            <Route path="categories" element={<CategoriesPage />} />

            <Route path="instructor-list" element={<InstractorListPage />} />
            <Route
              path="instructor-single/:id"
              element={<InstractorSinglePage />}
            />
            <Route path="become-teacher" element={<BecomeTeacherPage />} />
            <Route path="event-list" element={<EventListPage />} />
            <Route path="event-single/:id" element={<EventSinglePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="help-center" element={<HelpCenterPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="page-not-found" element={<PageNotFoundPage />} />
            <Route path="*" element={<PageNotFoundPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route
              path="instructor-dashboard"
              element={<InstractorPageDashBoard />}
            />
            <Route
              path="student-dashboard"
              element={<StudentPageDashboard />}
            />
            <Route path="ui-elements" element={<UiElementsPage />} />

            <Route path="blog-grid" element={<BlogGridPage />} />
            <Route path="blog-list-v1" element={<BlogListPage1 />} />
            <Route path="blog-list-v2" element={<BlogListPage2 />} />
            <Route path="blog-single/:id" element={<BlogSinglePage />} />
            <Route path="shop-list" element={<ShopListPage />} />
            <Route path="shop-single/:id" element={<ShopSinglePage />} />
            <Route path="shop-cart" element={<ShopCartPage />} />
            <Route path="shop-checkout" element={<ShopCheckoutPage />} />
            <Route path="shop-order" element={<ShopOrderPage />} />

            <Route
              path="instructor-my-courses"
              element={<InstractorPageMyCourses />}
            />
            <Route
              path="instructor-reviews"
              element={<InstractorPageReviews />}
            />
            <Route
              path="instructor-wishlist"
              element={<InstractorPageWishlist />}
            />
            <Route
              path="instructor-quizzes"
              element={<InstractorPageQuizzes />}
            />
            <Route path="instructor-order" element={<InstractorPageOrder />} />
            <Route
              path="instructor-setting"
              element={<InstractorPageSettings />}
            />
            <Route
              path="instructor-add-course"
              element={<InstractorPageAddCourse />}
            />

            <Route
              path="student-my-courses"
              element={<StudentPageMyCourses />}
            />
            <Route path="student-reviews" element={<StudentPageReviews />} />
            <Route path="student-wishlist" element={<StudentPageWishlist />} />
            <Route path="student-quizzes" element={<StudentPageQuizzes />} />
            <Route path="student-order" element={<StudentPageOrder />} />
            <Route path="student-setting" element={<StudentPageSettings />} />
          </Route>
        </Routes>
      </Context>
      <SearchModal />
      <BackToTop />
      <MobileMenu />
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
