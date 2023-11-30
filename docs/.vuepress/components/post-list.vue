<template>
    <div>
        <div class="aaa">
            <div class="post-list">
                <h3>Posts</h3>
                <ul>
                    <li v-for="(post, idx) in list" :key="idx">
                        <div class="card">
                            <header>
                                <!-- <a :href="post.path">{{ post.title }}</a> -->
                                <router-link :to="post.path">{{ post.title }}</router-link>
                            </header>
                            <p class="content" v-html="post.contentRendered"></p>
                            <footer>
                                <span class="footer-tags">
                                    标签: <span class="el-tag">{{ post.frontmatter.tag }}</span>
                                </span>
                                <span>创建时间: {{ post.frontmatter.createTm }}</span>
                            </footer>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="tag-list">
                <h3>Tags</h3>
                <ul>
                    <li v-for="(classify, idx) in classifyList" :key="idx">
                        <span class="el-tag">{{ classify }}</span>
                    </li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { malou } from '../.temp/malou'
// import { inject } from 'vue'

// const message: any = inject('router')
// const route = message.currentRoute
// console.log(route.value);

// const base = '/blog'
// import {useRoute} from 'vuerouter'
const list = malou.filter(post => post.path !== '/' && post.title !== '')
    .map(post => {
        // post.path = base + post.path
        post.contentRendered = post.contentRendered.slice(0, 30)
        return post
    })

const classifyList = computed(() => list.map(post => post.frontmatter.tag))

</script>

<style scoped lang="scss">
.card {
    background-color: var(--el-bg-color);
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 4px;
    overflow: hidden;

    // box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, .72), 0px 12px 32px #000000, 0px 8px 16px -8px #000000;
    .content {
        max-height: 4rem;
    }

    .footer-tags {
        align-items: center;
    }
}

.aaa {
    display: flex;

    // box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .36), 0px 8px 20px rgba(0, 0, 0, .72);
    .post-list {
        flex: 3;
    }

    .tag-list {
        flex: 1;
        margin: 0 2rem;

        ul {
            background-color: var(--el-bg-color);
            padding: 1rem;

            li {
                margin-bottom: 1rem;
            }
        }
    }

    .el-tag {
        --el-tag-bg-color: var(--el-color-primary-light-9);
        --el-tag-border-color: var(--el-color-primary-light-8);
        --el-tag-hover-color: var(--el-color-primary);
        --el-tag-text-color: var(--el-color-primary);
        background-color: var(--el-tag-bg-color);
        border-color: var(--el-tag-border-color);
        color: var(--el-tag-text-color);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        height: 24px;
        padding: 0 9px;
        font-size: var(--el-tag-font-size);
        line-height: 1;
        border-width: 1px;
        border-style: solid;
        border-radius: var(--el-tag-border-radius);
        box-sizing: border-box;
        white-space: nowrap;
        --el-icon-size: 14px;
    }
}
</style>