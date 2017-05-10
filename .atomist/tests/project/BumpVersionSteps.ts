/*
 * Copyright © 2017 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Project } from "@atomist/rug/model/Project";
import { Given, ProjectScenarioWorld, Then, When } from "@atomist/rug/test/project/Core";

Given("a bad manifest file", (p: Project, w: ProjectScenarioWorld) => {
    p.addFile(".atomist/manifest.yml", `group: test-rugs
artifact: test-manifest
version: "1.0"
requires: "[1.0.0-m.3,2.0.0)"
`);
});

When("BumpVersion bumps the (major|minor|patch) version", (p: Project, w: ProjectScenarioWorld, component: string) => {
    const editor = w.editor("BumpVersion");
    w.editWith(editor, { component });
});
