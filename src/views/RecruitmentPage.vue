<script setup>
import SceneAmpharos from '@/components/SceneAmpharos.vue';
</script>

<template>
    <SceneAmpharos />
    <div class="wrapper">
        <div class="grid">
            <p class="p1">
                So you want to be part of MCSS...
            </p>
            <p class="p1">&nbsp</p>
            <p class="p1">&nbsp</p>
            <h1 class="page-title">
                RECRUITMENT
            </h1>
            <p class="p1">
                If you've ever wanted to be a part of a loving and caring family 🏠, have plenty fun while planning exciting
                events 🤪, and make friends with people that have the drippiest swag 😎, then MCSS is the perfect place for
                you!
            </p>
            <p class="p1">
                We have two recruitment periods that open depending on position availabilities: Fall and Winter.
                <br />Currently, recruitment hasn't opened yet. Please keep an eye out on our SNS for posts!
            </p>
            <p class="p1">NOTE: You <strong>do not</strong> have to be Chinese to apply!</p>
            <p class="p1">&nbsp</p>
            <p class="p1">&nbsp</p>
            <h class="page-title">positions</h>
        </div>
    </div>
    <section class="py-5 section-bubble1">
        <div class="container">
            <h1>
                Section1
            </h1>
            <p>
                A test paragraph.
            </p>
        </div>
    </section>
    <section class="py-5 section-bubble2">
        <div class="container">
            <h1>
                Section2
            </h1>
            <p>
                what
            </p>
        </div>
    </section>
    <section class="py-5 section-bubble3">
        <div class="container">
            <h1>
                Section3
            </h1>
            <p>
                A test paragraph.
            </p>
        </div>
    </section>
    <section class="py-5 section-bubble4">
        <div class="container">
            <h1>
                Section4
            </h1>
            <p>
                A test paragraph.
            </p>
        </div>
    </section>
    <section class="py-5 section-bubble5">
        <div class="container">
            <h1>
                The footer
            </h1>
            <p>
                A test paragraph.
            </p>
            <br /><br /><br /><br />
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    position: relative;
    max-width: 1660px;
    width: 66.666%;
    left: 16.666%
}

.grid {
    list-style: none;
    margin: 0;
    padding: 0;
}

.page-title {
    font-size: var(--header-text-size-px);
    width: 100%;
    text-align: center;
    display: inline-block;
    position: relative;
    margin-bottom: 45px;
    letter-spacing: var(--heading-spacing);
    text-transform: var(--heading-font-case);
}

.p1 {
    text-align: center;
    margin-bottom: 15px;
}

.section-bubble,
.section-bubble_type-b,
.section-bubble_type-a,
.section-bubble4,
.section-bubble3,
.section-bubble2,
.section-bubble1 {
    margin-bottom: 20vw;
    position: relative;
}

.section-bubble:after,
.section-bubble_type-b:after,
.section-bubble_type-a:after,
.section-bubble4:after,
.section-bubble3:after,
.section-bubble2:after,
.section-bubble1:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20vw;
    background: url("") green;
    background-size: 100%;
    transform: translate(0, 100%);
}

.section-bubble1 {
    background-color: #ffffff;
}

.section-bubble1:after {
    background-color: #FFD2B0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
}

.section-bubble2 {
    background-color: #FFD2B0;
}

.section-bubble2:after {
    background-color: #384364;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='%23FFD2B0'/></svg>");
}

.section-bubble3 {
    background-color: #384364;
}

.section-bubble3:after {
    background-color: #cccccc;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23384364' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
}

.section-bubble3 h1 {
    color: white;
}

.section-bubble3 p {
    color: white;
    opacity: 0.8;
}

.section-bubble4 {
    background-color: #cccccc;
}

.section-bubble4:after {
    background-color: #333333;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='%23cccccc'/></svg>");
}

.section-bubble5 {
    background: #333333;
    color: white;
    text-align: center;
}

.section-bubble_type-a:after {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='red' viewBox='0 0 1185 248'><circle cx='76' cy='121.1' r='20' class='a'/><circle cx='870' cy='201.1' r='11' class='a'/><circle cx='814.5' cy='165.6' r='24.5' class='a'/><path d='M0 0v17.7c22.7 14.8 53 31.9 90.7 51.5 150.8 78 322 116.6 424.8 69.3 102.9-47.4 138-69.3 210.8-69.3s118.3 48.6 219.5 38.3 76.3-59.3 188.7-59.3c18.9 0 35.5 2.6 50.5 6.8V0H0z' class='a'/></svg>");
}

.section-bubble_type-b:after {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1185 248'><path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' fill='red'/></svg>");
}</style>