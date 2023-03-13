<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { MDCTabBar } from "@material/tab-bar";

  // Props
  export let tabs = []; // Array: [{ title (string), icon: (string, opcional), active (boolean) }...]

  const dispatch = createEventDispatcher();

  let tabBarElement;

  onMount(() => {
    const tabBar = new MDCTabBar(tabBarElement);
    tabBar.listen("MDCTabBar:activated", (e) => {
      dispatch("tab-click", { index: e.detail.index });
    });
  });
</script>

<div bind:this={tabBarElement} class="mdc-tab-bar" role="tablist">
  <div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        {#each tabs as tabData}
          <button
            type="button"
            class="mdc-tab"
            class:mdc-tab--active={tabData.active}
            role="tab"
            aria-selected="true"
            tabindex="0"
          >
            <span class="mdc-tab__content">
              {#if tabData.icon}
                <span
                  class="mdc-tab__icon material-symbols-rounded"
                  aria-hidden="true">{tabData.icon}</span
                >
              {/if}
              <span class="mdc-tab__text-label bs-headline-2">{tabData.title}</span>
            </span>
            <span class="mdc-tab-indicator">
              <span
                class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
              />
            </span>
            <!-- <span class="mdc-tab__ripple" /> -->
          </button>
        {/each}
      </div>
    </div>
  </div>
</div>

<style src="./tab-bar.scss"></style>
