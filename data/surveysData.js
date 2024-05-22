const surveysData = [
    {
        name: "Engagement Général",
        category: "Engagement",
        description: "Évaluez le niveau d'engagement et de satisfaction des employés vis-à-vis de leur travail et de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title: "Vous sentez-vous engagé(e) envers votre travail et l'entreprise ?",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
                Type: "rating"
            },
            {
                Question_title: "Dans quelle mesure vous sentez-vous enthousiaste à l'idée de venir travailler ?",
                Lower_label: "Pas du tout",
                Upper_label: "Énormément",
                Type: "rating"
            },
            {
                Question_title: "Pensez-vous que vos contributions sont valorisées au sein de l'entreprise ?",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
                Type: "rating"
            },
            {
                Question_title: "Avez-vous des opportunités de contribuer à des projets qui vous passionnent ?",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
                Type: "rating"
            },
            {
                Question_title: "Êtes-vous satisfait(e) de la direction prise par l'entreprise ?",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
                Type: "rating"
            },
            {
                Question_title: "Pensez-vous que votre travail a un sens et une importance ?",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
                Type: "rating"
            },
        ],
    },

    {
        name: "Implication et de soutien",
        category: "Engagement",
        description: "Mesurez le soutien perçu et l'implication des employés dans les objectifs et les initiatives de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title: "Recevez-vous un soutien adéquat de la part de votre supérieur hiérarchique ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Vous sentez-vous soutenu(e) dans votre développement professionnel au sein de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Avez-vous des occasions de contribuer activement aux décisions et aux initiatives de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Pensez-vous que votre voix est entendue et prise en compte lors des discussions d'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Êtes-vous encouragé(e) à partager vos idées et suggestions pour améliorer les processus de travail ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },

    {
        name: "Développement et reconnaissance",
        category: "Engagement",
        description: "Évaluez les opportunités de développement professionnel et la reconnaissance des contributions des employés.",
        surveyType: "default",
        questions: [
            {
                Question_title: "Avez-vous des opportunités de croissance et de développement professionnel au sein de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Recevez-vous un retour d'information régulier sur votre travail et vos performances ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Vous sentez-vous reconnu(e) et valorisé(e) pour vos réalisations au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Êtes-vous satisfait(e) des programmes de formation et de développement proposés par l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Pensez-vous que vos compétences et vos contributions sont pleinement utilisées dans votre rôle actuel ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Environnement de travail",
        category: "Engagement",
        description: "Explorez la perception des employés sur leur environnement de travail, y compris la culture d'entreprise et les conditions physiques.",
        surveyType: "default",
        questions: [
            {
                Question_title: "Comment évalueriez-vous l'ambiance générale au sein de l'entreprise ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title: "Disposez-vous des ressources et des outils nécessaires pour accomplir votre travail de manière efficace ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "À quelle fréquence interagissez-vous avec vos collègues en dehors des réunions formelles ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title: "Considérez-vous l'ambiance de travail comme positive et stimulante ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Êtes-vous satisfait(e) de l'équilibre entre le travail individuel et le travail d'équipe dans votre quotidien professionnel ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },

    {
        name: "Satisfaction générale",
        category: "Satisfaction",
        description:
            "Évaluez la satisfaction globale des employés concernant leur travail, leur équipe et l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "A quel point êtes-vous satisfait(e) de votre expérience globale au sein de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "Dans quelle mesure êtes-vous satisfait(e) de votre rémunération globale ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "Comment évaluez-vous les opportunités de croissance et de développement professionnel offertes par l'entreprise ?",
                Type: "rating",
                Lower_label: "Très mauvaises",
                Upper_label: "Très bonnes",
            },
            {
                Question_title:
                    "Recommanderiez-vous votre entreprise en tant qu'employeur à un ami ou à un collègue ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Dans quelle mesure êtes-vous satisfait(e) de vos avantages sociaux (assurance santé, congés payés, etc.) ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "Dans quelle mesure êtes-vous satisfait(e) de votre environnement de travail (ergonomie, éclairage, propreté, etc.) ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
        ],
    },
    {
        name: "Équilibre et bien-être",
        category: "Satisfaction",
        description:
            "Évaluez le bien-être des employés et leur équilibre entre vie professionnelle et personnelle.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "L'entreprise favorise-t-elle un bon équilibre entre vie professionnelle et vie personnelle ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Disposez-vous de ressources ou de programmes pour vous aider à gérer votre stress au travail ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Vous sentez-vous écouté(e) et soutenu(e) par l'entreprise en cas de difficultés personnelles ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise accorde une importance suffisante à la santé mentale de ses employés ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Très bien",
            },
            {
                Question_title:
                    'De manière générale, comment trouvez-vous votre balance "Vie perso VS vie pro"?',
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "L'entreprise encourage-t-elle la prise de congés et de vacances pour se reposer et se recharger ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Relations et communication",
        category: "Satisfaction",
        description:
            "Explorez la qualité des relations interpersonnelles et la communication au sein de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Dans quelle mesure êtes-vous satisfait(e) de vos relations avec vos collègues ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "La communication interne est-elle claire, efficace et transparente ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous l'impression de pouvoir facilement communiquer avec votre manager et vos collègues ?",
                Type: "rating",
                Lower_label: "Pas du tout facilement",
                Upper_label: "Très facilement",
            },
            {
                Question_title:
                    "L'entreprise encourage-t-elle le feedback et les échanges constructifs entre les employés ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Dans quelle mesure vous sentez-vous intégré(e) à l'équipe et à l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout intégré(e)",
                Upper_label: "Très intégré(e)",
            },
            {
                Question_title:
                    "Recevez-vous des informations et des mises à jour importantes de manière opportune ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Opportunités et développement",
        category: "Satisfaction",
        description:
            "Évaluez la perception des employés sur les opportunités de croissance professionnelle et de développement personnel.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Avez-vous des opportunités de croissance et de développement professionnel clairement définies au sein de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Recevez-vous un soutien adéquat de la part de votre supérieur hiérarchique pour votre développement professionnel ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que vos compétences sont pleinement utilisées dans votre rôle actuel ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de la reconnaissance et des récompenses pour vos réalisations professionnelles ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "Dans quelle mesure êtes-vous satisfait(e) des processus de feedback et d'évaluation des performances ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "Avez-vous des suggestions pour améliorer la satisfaction des employés dans l'entreprise ?",
                Type: "textarea",
            },
        ],
    },
    {
        name: "Objectifs et feedback",
        category: "Performances",
        description:
            "Mesurez la clarté des objectifs assignés aux employés et la fréquence du feedback reçu.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Avez-vous des objectifs clairs et réalisables définis pour votre travail ?",
                Type: "rating",
                Lower_label: "non",
                Upper_label: "oui",
            },
            {
                Question_title:
                    "Recevez-vous un feedback régulier sur vos performances et vos réalisations ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) du niveau de soutien et d'encadrement que vous recevez de votre supérieur hiérarchique pour atteindre vos objectifs ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Très satisfait(e)",
            },
            {
                Question_title:
                    "Pensez-vous que votre contribution individuelle contribue aux objectifs globaux de l'équipe et de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous la possibilité de donner votre avis sur les objectifs de performance et les processus d'évaluation ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title: "Comprenez-vous comment votre travail est évalué ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Motivation et engagement",
        category: "Performances",
        description:
            "Explorez les facteurs de motivation et le niveau d'engagement des employés envers leur travail et l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Vous sentez-vous motivé(e) par les objectifs de performance qui vous sont fixés ?",
                Type: "rating",
                Lower_label: "Pas motivé(e) du tout",
                Upper_label: "Très motivé(e)",
            },
            {
                Question_title:
                    "Pensez-vous que les récompenses et les reconnaissances sont équitables et transparentes ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title:
                    "L'entreprise vous offre-t-elle les ressources et le soutien nécessaires pour atteindre vos objectifs ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Vous sentez-vous valorisé(e) pour vos contributions à l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Recevez-vous un soutien adéquat de la part de votre équipe et de vos supérieurs hiérarchiques pour maintenir votre motivation ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Données et communication",
        category: "Performances",
        description:
            "Évaluez la perception des employés sur la collecte et la communication des données liées à leur performance.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Comment évaluez-vous la qualité de la communication et de la transmission des informations au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Recevez-vous des données et des informations pertinentes pour accomplir votre travail de manière efficace ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) des outils et des plateformes utilisés pour partager des données et des informations au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "La communication sur les données de performance est-elle claire et transparente ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que les données et les informations sont accessibles à tous les membres de l'équipe de manière équitable et transparente ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Comprenez-vous comment vos données de performance sont utilisées ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Amélioration et développement",
        category: "Performances",
        description:
            "Mesurez la perception des employés sur les initiatives d'amélioration continue et le support pour leur développement professionnel.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Avez-vous des occasions de participer à des projets ou à des initiatives visant à améliorer les processus ou les performances de l'équipe ?",
                Type: "Y/N",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title:
                    "Comment évaluez-vous la capacité de l'équipe à identifier et à résoudre rapidement les problèmes et les défis rencontrés ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Recevez-vous un soutien adéquat pour proposer des idées et des suggestions d'amélioration au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de la manière dont les échecs et les erreurs sont traités et utilisés comme des opportunités d'apprentissage au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous des suggestions pour améliorer l'utilisation des données de performance au sein de l'entreprise ?",
                Type: "textarea",
            },
        ],
    },
    {
        name: "Confiance et communication",
        category: "Management",
        description:
            "Explorez la confiance des employés envers la direction et la qualité de la communication au sein de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Avez-vous confiance en vos supérieurs hiérarchiques pour prendre des décisions éclairées ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de la transparence et de l'ouverture de la communication au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Recevez-vous un feedback constructif de la part de vos supérieurs hiérarchiques sur votre performance ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Vous sentez-vous à l'aise pour exprimer vos préoccupations et poser des questions à vos supérieurs hiérarchiques ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que vos supérieurs hiérarchiques prennent en compte les opinions et les suggestions de leur équipe lors de la prise de décision ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Soutien et développement",
        category: "Management",
        description:
            "Évaluez le niveau de soutien et les opportunités de développement offerts par l'entreprise à ses employés.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Recevez-vous un soutien adéquat de la part de vos supérieurs hiérarchiques pour votre développement professionnel ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de l'encadrement et de l'orientation que vous recevez de vos supérieurs hiérarchiques ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous des occasions de discuter de vos objectifs professionnels et de votre progression de carrière avec vos supérieurs hiérarchiques ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title:
                    "Pensez-vous que vos supérieurs hiérarchiques reconnaissent et valorisent vos contributions à l'équipe et à l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que votre manager vous aide à atteindre votre plein potentiel ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Collaboration et relations",
        category: "Management",
        description:
            "Mesurez la qualité de la collaboration entre les équipes et les relations interpersonnelles au sein de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Comment évaluez-vous la qualité de la collaboration et des relations au sein de l'équipe ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Avez-vous des occasions de travailler en étroite collaboration avec vos collègues sur des projets ou des initiatives ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) du niveau de confiance et de coopération entre les membres de l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait(e)",
                Upper_label: "Tout à fait satisfait(e)",
            },
            {
                Question_title:
                    "Pensez-vous que les conflits et les désaccords au sein de l'équipe sont gérés de manière efficace et constructive ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "La communication au sein de votre équipe est-elle efficace et constructive ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Leadership et Vision",
        category: "Satisfaction",
        description:
            "Évaluez la perception des employés concernant le leadership et la vision de l'équipe et de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Avez-vous confiance en la capacité de votre manager à diriger l'équipe ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de la direction et de la vision fournies par vos supérieurs hiérarchiques ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que vos supérieurs hiérarchiques communiquent efficacement la vision et les objectifs de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous des occasions de contribuer à la création et à la mise en œuvre de la vision et des objectifs de l'entreprise ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title:
                    "Comment évaluez-vous les compétences en leadership de vos supérieurs hiérarchiques ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Avez-vous des suggestions pour renforcer le leadership et la vision au sein de l'équipe et de l'entreprise ?",
                Type: "textarea",
            },
        ],
    },
    {
        name: "Expérience de travail à distance",
        category: "Satisfaction",
        description:
            "Évaluez votre expérience de travail à distance et votre satisfaction concernant le télétravail.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Comment évaluez-vous votre expérience de travail à distance ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Disposez-vous des outils et des ressources nécessaires pour travailler efficacement à distance ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de la flexibilité offerte par l'entreprise en matière de télétravail ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title: "Quels sont les avantages du travail à distance selon vous ?",
                Type: "multiple_choice",
                Lower_label: "Gain de temps",
                Upper_label: "Flexibilité",
            },
            {
                Question_title:
                    "Vos préférences ou des besoins spécifiques en matière de télétravail sont pris en compte?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Satisfaction et perception - Télétravail",
        category: "Télétravail",
        description:
            "Mesurez la satisfaction des employés concernant leur expérience de télétravail et leur perception des avantages et des défis.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Dans quelle mesure êtes-vous satisfait(e) de votre situation actuelle de télétravail ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait",
                Upper_label: "Tout à fait satisfait",
            },
            {
                Question_title:
                    "Pensez-vous que le télétravail a eu un impact positif sur votre productivité ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Comment évaluez-vous le soutien de l'entreprise en matière de télétravail ?",
                Type: "rating",
                Lower_label: "Très mauvais",
                Upper_label: "Très bon",
            },
            {
                Question_title:
                    "Pensez-vous que le télétravail est une pratique durable pour l'avenir de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous le sentiment d'être suffisamment soutenu(e) par l'entreprise pour télétravailler efficacement ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Environnement de travail et outils",
        category: "Télétravail",
        description:
            "Explorez la satisfaction des employés concernant leur environnement de travail à distance et les outils mis à leur disposition.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Disposez-vous d'un environnement de travail adapté à vos besoins et à vos préférences à domicile ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous des difficultés à accéder aux outils et aux ressources nécessaires pour accomplir votre travail à distance ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "L'entreprise vous fournit-elle les outils et le matériel nécessaires pour télétravailler efficacement ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise fournit un soutien adéquat pour améliorer votre environnement de travail à distance ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "L'entreprise propose-t-elle des solutions pour maintenir le lien social et l'esprit d'équipe en télétravail ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
        ],
    },
    {
        name: "Attentes et perspectives",
        category: "Télétravail",
        description:
            "Évaluez les attentes des employés concernant le télétravail et leurs perspectives sur son avenir au sein de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title: "Souhaitez-vous continuer à télétravailler à l'avenir ?",
                Type: "rating",
                Lower_label: "Non",
                Upper_label: "Oui",
            },
            {
                Question_title: "Votre rythme de télétravail vous convient-il?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que le télétravail est compatible avec la culture et les valeurs de l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise doit donner plus de poids au télétravail?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Quelles mesures l'entreprise pourrait-elle prendre pour améliorer le télétravail et répondre aux besoins de ses employés ?",
                Type: "textarea",
            },
        ],
    },
    {
        name: "Politique d'entreprise",
        category: "Politique d'entreprise",
        description:
            "Mesurez la satisfaction et la perception des employés concernant les politiques et les pratiques de l'entreprise.",
        surveyType: "default",
        questions: [
            {
                Question_title:
                    "Comment évaluez-vous la transparence et la clarté de la politique d'entreprise ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) des avantages et des politiques de rémunération offerts par l'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait",
                Upper_label: "Tout à fait satisfait",
            },
            {
                Question_title:
                    "Pensez-vous que les politiques de l'entreprise sont appliquées de manière équitable et cohérente à tous les niveaux ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) de l'engagement de l'entreprise envers le développement durable et la responsabilité sociale ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait",
                Upper_label: "Tout à fait satisfait",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise prend en compte les besoins et les attentes de ses employés dans l'élaboration de sa politique ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "L'entreprise pourrait-elle entreprendre des actions pour mieux répondre à vos attentes en matière de politique d'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Comment évaluez-vous la communication de l'entreprise concernant sa politique et ses décisions stratégiques ?",
                Type: "rating",
                Lower_label: "Très mauvaise",
                Upper_label: "Très bonne",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) du niveau de transparence de l'entreprise concernant ses politiques et ses processus décisionnels ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait",
                Upper_label: "Tout à fait satisfait",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise communique efficacement les changements de politique et les mises à jour importantes aux employés ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Les canaux de communication pour recevoir des informations sur la politique d'entreprise sont-ils efficaces?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous des occasions de participer à l'élaboration ou à la révision des politiques de l'entreprise ?",
                Type: "rating",
                Lower_label: "Jamais",
                Upper_label: "Toujours",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise valorise et encourage la contribution des employés à l'amélioration de sa politique ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Êtes-vous satisfait(e) du niveau de consultation des employés dans les processus de décision concernant la politique d'entreprise ?",
                Type: "rating",
                Lower_label: "Pas du tout satisfait",
                Upper_label: "Tout à fait satisfait",
            },
            {
                Question_title:
                    "Dans quelle mesure pensez-vous que les politiques de l'entreprise reflètent ses valeurs et sa culture ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Complètement",
            },
            {
                Question_title:
                    "Êtes-vous d'accord avec les valeurs et les principes fondamentaux de l'entreprise tels qu'ils sont exprimés dans sa politique ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Pensez-vous que l'entreprise respecte ses engagements en matière de responsabilité sociale et environnementale ?",
                Type: "rating",
                Lower_label: "Pas du tout",
                Upper_label: "Tout à fait",
            },
            {
                Question_title:
                    "Avez-vous des commentaires ou des suggestions à formuler concernant les politiques de l'entreprise?",
                Type: "textarea",
            },
        ],
    },
];
module.exports = surveysData