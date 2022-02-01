export default {
  name: "best-projects",
  components: {},
  props: [],
  data() {
    return {
      cards: [
        {
          projectTitle: "توسعه نرم افزار",
          img: "توسعه نرم افزار.png",
          projectDescription:
            "کسب و کارهایی که بر پایه نرم­افزار بنا شده­اند، با تغییرات بازار و شرایط کسب و کار نیاز به توسعه مداوم دارند تا بتوانند خود را با شرایط جدید هماهنگ کرده و با افزودن امکانات جدید نیازهای مشتریان خود را مرتفع سازند."
        },
        {
          projectTitle: "دیجیتال مارکتینگ",
          img: "دیجیتال مارکتینگ2.png",
          projectDescription:
            "با تغییرات گسترده در فضای کسب و کارها، دیگر با روش­های سنتی بازاریابی نمی­توان در بازار رقابت باقی ماند. اجرای صحیح برنامه­های دیجیتال مارکتینگ می­تواند کسب و کارها را همواره در دید مخاطبان خود قرار دهد. "
        },
        {
          projectTitle: "برندینگ",
          img: "برندینگ.png",
          projectDescription:
            "شاید هنوز هم کسانی باشند که برند را فقط یک لوگو و یا یک شعار تبلیغاتی بدانند اما واقعیت این است که برند تمام شخصیت و تصور مشتریان از کسب و کار است و ایجاد تصور دلخواه در ذهن بازار کاری کاملا تخصصی و پیچیده است."
        }
        // {
        //   projectTitle: "طراحی سایت",
        //   img: "اپلیکیشن.jpg",
        //   projectDescription:
        //     "کسب و کاری که وب­سایت خوبی نداشته باشد، جایی در بازار رقابتی امروز ندارد. داشتن یک وب­سایت کارآمد برای هر کسب و کاری یک ضرورت است."
        // },
        // {
        //   projectTitle: "تولید محتوا",
        //   img: "داخلی.jpg",
        //   projectDescription:
        //     "تولید محتوا به­عنوان یکی از پایه­های بازاریابی در دنیای کسب و کار امروز، اولویت بالایی برای سازمان­ها دارد و تولید محتوای حرفه­ای در مسیر رشد و پیشرفت سازمان الزامی است."
        // },
        // {
        //   projectTitle: "طراحی هویت بصری",
        //   img: "بصری.jpg",
        //   projectDescription:
        //     "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده\n" +
        //     "از طراحان گرافیک است. چاپگرها و متون بل"
        // },
        // {
        //   projectTitle: "طراحی وب سایت",
        //   img: "وبسایت.jpg",
        //   projectDescription:
        //     "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده\n" +
        //     "از طراحان گرافیک است. چاپگرها و متون بل"
        // }
      ]
    };
  },
  computed: {},
  mounted() {
    // this.getBestProjects();
  },
  methods: {
    // getBestProjects() {
    //   const options = {
    //     is_selected: true
    //   };
    //   profileServices.bestProjects(options).then(res => {
    //     this.cards = res.data.data.data.slice(0, 7);
    //   });
    // }
  }
};
