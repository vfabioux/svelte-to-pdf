<script lang="ts">
    import { faAt, faCalendarDays, faCar, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
    import { Page } from "$lib";
    import Column from "../Column.svelte";
    import ColumnLayout from "../ColumnLayout.svelte";
    import Experience from "../Experience.svelte";
    import Header from "../Header.svelte";
    import SkillList from "../SkillList.svelte";
    import TagList from "../TagList.svelte";
    import { renderAge } from "../utils";
    import routes from "../../routes";
    import MyEditor from "../../MyEditor.svelte";

    const route = $derived(routes.find((route) => route.url === "/vfabioux-cv/en")!);
</script>

<head>
    <title>Vincent Fabioux's french CV</title>
</head>

<MyEditor {route}
    ><Page>
        <Header
            name="Vincent Fabioux"
            title="Senior fullstack software engineer"
            list={[
                { label: renderAge(new Date(1995, 5, 24), "en"), icon: faCalendarDays },
                { label: "+33673279907", icon: faPhone, url: "tel:+33673279907" },
                { label: "vfabioux@gmail.com", icon: faAt, url: "mailto:vfabioux@gmail.com" },
                { label: "Massy, France", icon: faLocationDot, url: "https://www.google.com/maps/place/91300+Massy" },
                { label: "Permis B - Véhicule personnel", icon: faCar },
            ]} /><ColumnLayout
            ><Column
                ><h2>Expériences professionnelles</h2>
                <Experience
                    duration="2021 - 2025"
                    entity="Ivalua : Gestion des achats"
                    location="Massy, France"
                    title="Senior fullstack software engineer">
                    Développement du module de gestion des contrats dans une plateforme SaaS de Source-to-Pay hautement
                    configurable.
                    <ul>
                        <li>Principal développeur frontend de l'équipe, migration de JavaScript vers TypeScript.</li>
                        <li>
                            Gestion et refonte du système d'édition web de documents riches à l'aide de CKEditor et
                            divers plugins.
                        </li>
                        <li>
                            Formation de mon équipe à React en vue d'une migration d'ampleur (passage de contenu généré
                            côté serveur à une SPA).
                        </li>
                        <li>
                            Améliorations du serveur .NET et de ses requêtes T-SQL lourdes, nécessaires à un système
                            d'autorisations complexe.
                        </li>
                        <li>
                            Conversion de documents PDF, Word et CKEditor à l'aide d'Aspose .NET et d'algorithmes
                            complexes.
                        </li>
                        <li>Implémentation de fonctionnalités IA (dont LLM) dans des contrats et des documents.</li>
                        <li>
                            Projets en autonomie : recherche Elasticsearch sur des millions de documents ; add-in Word
                            critique au module.
                        </li>
                    </ul>
                </Experience>
                <hr />
                <Experience
                    duration="2020 - 2021"
                    entity="Entropy : Mobilité et IA"
                    location="Versailles, France"
                    title="Fullstack software engineer"
                    >Développement d'applications web pour le suivi des mobilités et l'aide à la décision destinées aux
                    opérateurs de transports.
                    <ul>
                        <li>
                            Frontend : améliorations, redesign, restructuration et ajout de fonctionnalités au client
                            web utilisant React.
                        </li>
                        <li>
                            Backend : gestion du serveur Python (Sanic) et de la base de données PostgreSQL (avec
                            PostGIS pour les données spatiales).
                        </li>
                        <li>
                            Data : mise en place et utilisation d'outils d'ETL pour récupérer, transformer et utiliser
                            des données de transports publics.
                        </li>
                    </ul></Experience>
                <hr />
                <Experience
                    duration="2018"
                    entity="Groupe PSA : Automobile"
                    location="Vélizy, France"
                    title="Stage - Développeur d'application web"
                    >Conception d'un outil de création de scènes 3D interactives pour la présentation de nouveaux
                    concepts aux autres départements.
                    <ul>
                        <li>Définition des besoins et choix des technologies.</li>
                        <li>Développement et déploiement de l'application web.</li>
                        <li>Conversion et intégration des modèles 3D issus de Maya.</li>
                    </ul></Experience
                ></Column
            ><Column width="200pt"
                ><h2>Formation</h2>
                <Experience
                    duration="2013 - 2018"
                    entity="Polytech Paris-Saclay"
                    location="Orsay, France"
                    title="Diplôme d'ingénieur en informatique">
                    Informatique : programmation, algorithmique, réseau, sécurité, IA ...<br />
                    Sciences : mathématiques, électronique ...<br />
                    Entreprise: économie, management ...<br />
                </Experience>
                <hr />
                <Experience
                    duration="2010-2013"
                    entity="Lycée de l'Essouriau"
                    location="Les Ulis, France"
                    title="Baccalauréat Scientifique"
                    >Spécialité Mathématiques et Sciences de l'Ingénieur, Mention Très Bien.</Experience>
                <h2>Langues</h2>
                <ul>
                    <li><b>Français :</b> Langue maternelle</li>
                    <li><b>Anglais :</b> C2 - TOEIC 975</li>
                    <li><b>Espagnol :</b> B2</li>
                </ul>
                <h2>Hard Skills</h2>
                <TagList tags={["TypeScript", "HTML5", "CSS3", "React", "C#", ".NET", "Python", "Java", "git"]} />
                <hr />
                <TagList tags={["Agile", "Clean Code", "CI/CD", "TDD"]} />
                <h2>Soft Skills</h2>
                <SkillList
                    skills={[
                        { label: "Esprit d'équipe", level: 5 },
                        { label: "Rigueur et logique", level: 5 },
                        { label: "Autonomie", level: 4 },
                    ]} />
                <h2>Centres d'intérêt</h2>
                <ul>
                    <li>Politique et sociologie</li>
                    <li>Sciences et technologies</li>
                    <li>Jeux vidéos et jeux de société</li>
                </ul></Column
            ></ColumnLayout
        ></Page
    ></MyEditor>
