import { ticketService } from "../../../core/services";

export default {
  name: "tickets",
  components: {},
  props: [],
  data() {
    return {
      ticketsList: []
    };
  },
  computed: {},
  mounted() {
    this.getIndexTickets();
  },
  methods: {
    goTo(threadCode, projectId) {
      this.$router.push({
        path: `chat-room`,
        query: { threadCode, projectId }
      });
    },
    getIndexTickets() {
      ticketService.indexTickets().then(res => {
        this.ticketsList = res.data?.data.data;
      });
    }
  }
};
