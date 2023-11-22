AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
      },
      init: function () {
        this.handleClickEvents();
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
      update: function () {
        const fadeBackgroundEl = document.querySelector("#fadeBackground");
        c = fadeBackgroundEl.children;
        if (c.length > 0) {
          var i;
          for (i = 0; i <= c.length; i++) {
            fadeBackgroundEl.removeChild(c[i]);
          }
        } else {
          this.handleMouseClickEvents();
        }
      },
      handleClickEvents: function () {
        //Cursor 'click' Events
        this.el.addEventListener("click", evt => {
          const comicContainer = document.querySelector("#comic-container");
          const { state } = comicContainer.getAttribute("virtual-posters");
    
          if (state === "comic-list") {
            const id = this.el.getAttribute("id");
            const comicsId = [
              "gggtm",
              "ggbb",
              "agad",
    
            ];
            if (comicsId.includes(id)) {
              comicContainer.setAttribute("tour", {
                state: "view",
                selectedCard: id
              });
            }
          }
        });
      },
      handleComicsListState: function () {
        const id = this.el.getAttribute("id");
        const comicsId = [
            "gggtm",
            "ggbb",
            "agad",
          ];
        if (comicsId.includes(id)) {
          const comicContainer = document.querySelector("#comic-container");
          comicContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#D76B30",
            opacity: 1,
          });
        }
      },
      handleMouseEnterEvents: function () {
        //Cursor 'mouseenter' Events
        this.el.addEventListener("mouseenter", () => {
          this.handleComicsListState();
        });
      },
      handleMouseLeaveEvents: function () {
        //Cursor 'mouseleave' Events
          this.el.addEventListener("mouseleave", () => {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", {
                color: "#0077CC",
                opacity: 1,
              });
            }
          }
        });
      },
      handleMouseClickEvents: function () {
    
        this.el.addEventListener("click", () => {
          const { selectedItemId } = this.data;
    
          const fadeBackgroundEl = document.querySelector("#fadeBackground");
          const titleEl = document.querySelector("#app-title");
          const cursorEl = document.querySelector("#camera-cursor");
    
          if (selectedItemId) {
            fadeBackgroundEl.setAttribute("visible", true);
            fadeBackgroundEl.setAttribute("info-banner", {
              itemId: selectedItemId,
            });
            titleEl.setAttribute("visible", false);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.03,
              radiusOuter: 0.04,
            });
          } else {
          
            fadeBackgroundEl.setAttribute("visible", false);
            titleEl.setAttribute("visible", true);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.08,
              radiusOuter: 0.12,
            });
          }
        });
      },
})