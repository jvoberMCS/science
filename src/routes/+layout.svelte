<script lang="ts">
    import { Navbar, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
    import { base } from "$app/paths"; // need to specify base in hrefs for SPA to work on Github Pages etc.
    import "../app.css";

    let { children } = $props();
</script>

<header>
    <Navbar>
        <div class="flex items-center lg:order-2">
            <NavHamburger />
        </div>
        <NavUl>
            <div class="link">
                <NavLi href="{base}/">Home</NavLi>
            </div>
            <div class="link">
                <NavLi href="{base}/physicalScienceReference"
                    >Physical Science Formulas</NavLi
                >
            </div>
            <div class="link">
                <NavLi href="{base}/periodicTable">Periodic Table</NavLi>
            </div>
            <div class="link">
                <NavLi href="{base}/periodicTablePractice"
                    >Periodic Table Practice</NavLi
                >
            </div>
        </NavUl>
    </Navbar>
</header>
<div class="childs">
    {@render children()}
</div>

<style>
    .link {
        color: #f8f8f2;
    }

    header {
        max-height: 10vh;
    }
    .childs {
        max-height: 90vh;
    }
</style>
