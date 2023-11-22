AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        gggtm: {
          banner_url: "./assets/good-girl-guide-to-murder.jpg",
          title: "Good girl's guide to murder",
          released_year: "2013",
          description:
            "A debut YA crime thriller as addictive as Serial and as page-turning as One of Us Is Lying. A cold-case thriller written in the original format of a college report - complete with interviews, logs and murder maps. A deftly-woven cold-case plot with themes of race, privilege, family and justice at its heart. An incredibly commercial, thrilling and darkly humorous debut voice in YA crime fiction from a young author who is One To Watch. The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone. Having grown up in the small town that was consumed by the crime, Pippa Fitz-Amobi chooses the case as the topic for her final project. But when Pip starts uncovering secrets that someone in town desperately wants to stay hidden, what starts out as a project begins to become Pip?s dangerous reality . . . Perfect for fans of One of Us Is Lying, We Were Liars, Gone Girl, Pretty Little Liars and Riverdale.",
        },
        ggbb: {
          banner_url: "./assets/good-girl-bad-blood.jpg",
          title: "Good Girl, Bad blood",
          released_year: "2015",
          description:
            "A debut YA crime thriller as addictive as Serial and as page-turning as One of Us Is Lying. A cold-case thriller written in the original format of a college report - complete with interviews, logs and murder maps. A deftly-woven cold-case plot with themes of race, privilege, family and justice at its heart. An incredibly commercial, thrilling and darkly humorous debut voice in YA crime fiction from a young author who is One To Watch. The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone. Having grown up in the small town that was consumed by the crime, Pippa Fitz-Amobi chooses the case as the topic for her final project. But when Pip starts uncovering secrets that someone in town desperately wants to stay hidden, what starts out as a project begins to become Pip?s dangerous reality . . . Perfect for fans of One of Us Is Lying, We Were Liars, Gone Girl, Pretty Little Liars and Riverdale.",
        },
        agad: {
          banner_url: "./assets/as-good-as-dead.jpg",
          title: "As good as dead.",
          released_year: "2017",
          description:
            "A debut YA crime thriller as addictive as Serial and as page-turning as One of Us Is Lying. A cold-case thriller written in the original format of a college report - complete with interviews, logs and murder maps. A deftly-woven cold-case plot with themes of race, privilege, family and justice at its heart. An incredibly commercial, thrilling and darkly humorous debut voice in YA crime fiction from a young author who is One To Watch. The case is closed. Five years ago, schoolgirl Andie Bell was murdered by Sal Singh. The police know he did it. Everyone in town knows he did it. Almost everyone. Having grown up in the small town that was consumed by the crime, Pippa Fitz-Amobi chooses the case as the topic for her final project. But when Pip starts uncovering secrets that someone in town desperately wants to stay hidden, what starts out as a project begins to become Pip?s dangerous reality . . . Perfect for fans of One of Us Is Lying, We Were Liars, Gone Girl, Pretty Little Liars and Riverdale.",
        },
     };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 2,
        height: 2,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.8,
        height: 0.8,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.2, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });