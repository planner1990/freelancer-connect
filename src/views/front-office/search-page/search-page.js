import { mapActions, mapGetters } from "vuex";
import * as types from "../../../shared/store/types";
import { projectsService, profileServices } from "@/core/services";

export default {
  name: "search-page",
  components: {},
  props: [],
  data() {
    return {
      length: 3,
      page: 1,
      value: [0, 1000],
      min: 0,
      max: 1000,
      checkboxLabel: [
        "موبایل",
        "دیجیتال مارکتینگ",
        "کپی رایتینگ",
        "ویدیو",
        "انیمیشن",
        "طراحی وب",
        "یو آی",
        "یو ایکس",
        "وب",
        "گرافیک",
        "بک اند",
        "فرانت اند",
        "پی اچ پی",
        "لاراول",
        "ویو جی اس",
        "جاوا"
      ],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      category: 0,
      searchResult: [],
      searchText: ""
    };
  },
  computed: {
    ...mapGetters({
      getBrowseProjectData: types.BrowseProjectData.getters.BROWSE_PROJECT_GET
    }),
    showServices() {
      let serviceListItems = [];
      if (Object.entries(this.getBrowseProjectData).length > 0) {
        this.getBrowseProjectData.data.map(item => {
          serviceListItems.push({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.min_price,
            image: item["attachments"],
            username: item.username,
            skills: item.skills,
            createAt: item.created_at
          });
        });
        return serviceListItems;
      }
    },
    totalPage() {
      if (Object.entries(this.getBrowseProjectData).length > 0) {
        return Math.ceil(this.getBrowseProjectData.pagination.total / 5);
      }
    }
  },
  mounted() {
    this.showSearchTypeIndex();
    this.showSearchResult();
  },
  methods: {
    ...mapActions({
      setBrowseProjectData:
        types.BrowseProjectData.actions.BROWSE_PROJECT_ACTION
    }),
    changePage(currentPage) {
      const options = {
        page: currentPage,
        perPage: 10
      };
      projectsService.getAllProjects(options).then(res => {
        this.page = currentPage;
        this.setBrowseProjectData(res.data.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
    goToDetail(id) {
      this.$router.push(`/project-details/${id}`);
    },
    setSlider(e) {
      this.min = e[0];
      this.max = e[1];
    },
    showSearchResult() {
      const options = {
        text: this.searchText ? this.searchText : this.$route.query.value,
        type: this.category
      };
      profileServices.search(options).then(res => {
        this.searchResult = res.data?.data.data;
      });
    },
    showSearchTypeIndex() {
      profileServices.searchTypesIndex().then(res => {
        this.items = res.data.data;
      });
    },
    changeCategory() {
      this.showSearchResult();
    }
  }
};
