"use client";
import { useState, useEffect } from "react";
// import Image from "next/image"; // Unused import, consider removing if not needed
import { useLanguage } from "@/components/language-provider";


interface Content {
  title: string;
  cards: Card[];
}

interface Card {
  title: string;
  text: string;
}

function IndustrialComponent({ content }: { content: Content }) {
  const { title, cards } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-[#355834]">{title}</h1>
        </div>

        <div className="grid gap-8 pb-5">
          {Array.isArray(cards) && cards.length > 0 ? (
            cards.map((card, index) => (
              <div key={index} className="grid gap-4 items-center">
                <div className="relative  overflow-hidden">
                  <h2 className="text-xl font-bold text-[#355834] text-center">
                    {card.title}
                  </h2>
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-gray-800 text-justify leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No cards available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Industrial() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    fr: {
      title: "Conditions Générales de Vente",
      cards: [
        {
          title: "Article 1: Offre et commande",
          text: `1.1 La durée de validité des offres est indiquée dans celles-ci. Sauf indication contraire, les offres sont exprimées en euros (EUR) et la durée de validité est de 1 (un) mois. SOLAR SHOP est cependant libre de retirer son offre jusqu'à ce qu'elle soit acceptée par le Client.
          1.2 Toute commande d'un Client engage ce dernier par l'envoi de sa commande. L'organisation interne du Client ne peut être opposée à SOLAR SHOP et les employés, représentants, agents ou intermédiaires du Client sont irréfutablement réputés disposer du pouvoir requis pour engager le Client envers SOLAR SHOP. Inversement, les employés, représentants, agents et intermédiaires de SOLAR SHOP n'ont pas le pouvoir d'engager SOLAR SHOP. Les engagements pris par les agents, distributeurs ou représentants de SOLAR SHOP ne deviennent définitifs qu'après acceptation par SOLAR SHOP.
          1.3 SOLAR SHOP se réserve le droit de corriger à tout moment et en toutes circonstances les erreurs dans les confirmations de commande qui pourraient être faites dans les offres, de quelque nature que ce soit (prix, délai, etc.). SOLAR SHOP a également la possibilité de modifier à tout moment les conditions de la commande (y compris le calendrier) que le Client accepte, tant que cela ne perturbe pas le contrat.
          1.4 Pour une commande de produits sur mesure ou hors plan, SOLAR SHOP établit l'offre sur la base des dimensions communiquées par le Client. Ce dernier est entièrement responsable de l'exactitude des mesures communiquées et est responsable de vérifier la transcription correcte de ces mesures sur le bon de commande.
          1.5 Si la commande a été passée en ligne (via la boutique en ligne), l'utilisateur a le droit d'annuler son achat, sans donner de raison et sans frais, dans les 14 jours calendaires suivant le jour suivant la livraison. Pendant ces 14 jours, le consommateur doit informer SOLAR SHOP de son intention de se rétracter, en indiquant l'article qu'il souhaite retourner, en mentionnant le prix et le numéro de référence. Le numéro de commande et la date de livraison y sont également mentionnés. L'équipe e-commerce organisera immédiatement le retour de l'article à une date convenue entre les parties. SOLAR SHOP remboursera intégralement le montant de l'article, à condition que les marchandises soient complètes, en parfait état, non utilisées et dans leur emballage d'origine. Les frais de transport ne sont en aucun cas remboursés au consommateur, même si la commande est retournée dans son intégralité. Et les frais inhérents à ce retour sont à sa charge. Dès que l'article est en possession de SOLAR SHOP, le remboursement a lieu.
          1.6 Il existe des circonstances dans lesquelles le consommateur ne peut pas exercer un droit de rétractation. Entre autres:
          a. pour les contrats de services après que le service a été entièrement exécuté, si l'exécution a commencé avec l'accord exprès préalable du consommateur, qui a également reconnu qu'il perdra son droit de rétractation une fois le contrat entièrement exécuté.
          b. pour la fourniture de biens ou de services dont le prix dépend de fluctuations sur le marché financier qui échappent à tout contrôle et qui sont susceptibles de se produire pendant le délai de rétractation.
          c. pour la fourniture de biens fabriqués selon les spécifications du consommateur (sur mesure) ou clairement personnalisés.
          d. pour la fourniture de biens susceptibles de se détériorer ou de périmer rapidement.
          e. pour la fourniture de biens qui, après livraison, et de par leur nature, sont indissociablement mélangés avec d'autres articles (par exemple, des substances inflammables).
          Malgré tous les soins apportés à la mise en ligne de notre gamme de produits, le site www.solarstock.be n'est pas à l'abri de la présence de contenu erroné lié à des informations écrites confuses, incomplètes, inexactes ou incorrectes. Le site peut également être soumis à des pannes techniques de temps à autre. Dès qu'elle en a connaissance, SOLAR SHOP met tout en œuvre pour remédier à ces lacunes dans les plus brefs délais. L'entreprise SOLAR SHOP décline toute responsabilité pour les dommages directs ou indirects, de nature matérielle ou immatérielle, causés par son site et les sites associés. Qu'il s'agisse de prix, d'images ou de textes, les erreurs mentionnées sur le site ne donnent pas au client le droit d'annuler le paiement d'un produit ou de réclamer une quelconque indemnisation. Pour tout litige du client, SOLAR SHOP, avec la plus grande objectivité possible et en conservant un esprit commercial, proposera la solution qu'elle juge appropriée.
          1.7 SOLAR SHOP honore toutes les commandes dans la limite des stocks disponibles.`
        },
        {
          title: "Article 2: Prix",
          text: `2.1 Sauf indication contraire, les prix sont soit hors TVA pour les professionnels, soit TVA incluse pour les particuliers, au taux en vigueur le jour de la commande. Toute modification du taux peut être répercutée sur le prix des marchandises. Si SOLAR SHOP prend en charge le transport ou son organisation, SOLAR SHOP facturera également au Client les frais de transport, que ce dernier accepte. L'emballage adapté au mode de transport est également facturé.
          2.2 SOLAR SHOP se réserve le droit d'ajuster le montant de ses factures en fonction de l'augmentation des coûts de production ou d'achat/livraison que SOLAR SHOP pourrait avoir subis, entre la date d'envoi de la confirmation de commande et la date de livraison effective des produits/biens.`
        },
        {
          title: "Article 3: Paiement et conditions de paiement",
          text: `3.1 Nos factures sont payables à l'échéance, quelle que soit la date de livraison. En l'absence de date d'échéance, elles sont réputées payables au comptant.
          3.2 Un litige concernant nos services fournis et/ou les biens livrés ne peut être un motif de non-paiement ou de non-paiement des factures de SOLAR SHOP.
          3.3 L'envoi de la facture vaut mise en demeure de payer à la date d'échéance indiquée.
          3.4 En cas de non-paiement total ou partiel d'une facture, le montant restant dû est de plein droit et sans mise en demeure majoré d'un intérêt de 12% par an, chaque mois commencé étant dû. Toute facture impayée à l'échéance sera en outre majorée d'une indemnité forfaitaire et irréductible égale à 15% du solde restant dû, avec un minimum de 75 €, sous la clause pénale.
          3.5 Le non-paiement d'une facture à l'échéance rend automatiquement exigibles toutes les autres factures, même celles qui ne sont pas encore échues.
          3.6 En cas de non-paiement à l'échéance, SOLAR SHOP se réserve le droit de suspendre l'exécution du présent contrat, ainsi que toute autre commande, en tout ou en partie, jusqu'au jour du paiement intégral par le Client des factures, même si elles ne sont pas exigibles, majorées des intérêts contractuels et de l'indemnité.
          3.7 Enfin, toute demande de réorganisation ou de liquidation judiciaire, de médiation de dettes, de sursis de paiement ou tout autre fait pouvant impliquer ou laisser présumer l'insolvabilité du Client, entraîne automatiquement la perte par le Client sans préavis de toutes les factures en cours. De plus, ces situations donnent à SOLAR SHOP le droit de suspendre toutes les obligations de SOLAR SHOP sans formalité préalable et de résilier les contrats en cours en tout ou en partie sans autre formalité que la notification par lettre recommandée ou e-mail.
          3.8 Les frais administratifs, techniques ou autres liés au retard de paiement sont entièrement à la charge du Client.
          3.9 Toute réclamation concernant une facture doit être envoyée au plus tard huit jours calendaires après réception, soit par e-mail : spl@solarstock.be ; soit par courrier recommandé : SOLAR SHOP, Bergensesteenweg 458 à 1600 Sint-Pieters-Leeuw.`
        },
        {
          title: "Article 4: Livraison, contrôle et réception des biens",
          text: `4.1 À la demande du Client, les biens peuvent être livrés à l'adresse de son choix. Les frais de livraison sont facturés en plus au Client. Le Client est responsable de l'exactitude des informations de livraison. La livraison en Belgique est uniquement possible.
          4.2 Les délais de livraison sont indicatifs et leur dépassement ne peut en aucun cas donner lieu à l'octroi de dommages-intérêts ou à l'annulation de la commande.
          4.3 Il appartient au Client de faire, à la réception des produits/biens, toutes réserves utiles de manière claire et précise au transporteur (sur le bon de livraison), sous peine de déchéance. SOLAR SHOP ne peut en aucun cas être tenue responsable des incidents ou dommages liés au transport.
          4.4 Le Client s'engage à vérifier à la réception la qualité et la quantité des produits/biens et leur conformité à la commande. Toute réclamation concernant les biens est considérée comme nulle si elle n'est pas formulée par écrit dans les 48 heures suivant la livraison (soit par e-mail : spl@solarstock.be ; soit par courrier ordinaire : SOLAR SHOP, Bergensesteenweg 458 à 1600 Sint-Pieters-Leeuw). À défaut, l'acheteur ne pourra plus invoquer ce(s) défaut(s).
          4.5 Sauf accord contraire, la livraison est effectuée "franco usine/entrepôt à l'endroit désigné par SOLAR SHOP.`
        },
        {
          title: "Article 5: Garantie",
          text: `5.1 SOLAR SHOP fournit au Client des biens conformes au contrat. En cas de défaut de conformité, le Client non professionnel dispose d'une garantie légale de deux (2) ans, lui permettant de déposer une réclamation auprès du service client de SOLAR SHOP dans les huit (8) jours suivant la découverte ou la date à laquelle le Client ne pouvait raisonnablement pas en avoir connaissance. Le Client non professionnel qui souhaite bénéficier de la garantie légale doit présenter la facture ou le justificatif d'achat original.
          5.2 La garantie légale susmentionnée ne s'applique pas dans les cas suivants :
          - si le défaut résulte de l'usure normale du produit ;
          - si le défaut est causé par une utilisation imprudente ou un mauvais entretien du produit ;
          - si le défaut a une cause externe ;
          - si le Client était au courant ou ne pouvait raisonnablement pas ignorer le défaut au moment de l'achat.
          5.3 Lorsque la garantie offerte par SOLAR SHOP est supérieure à deux (2) ans, sa durée est indiquée dans les caractéristiques du produit.`
        },
        {
          title: "Article 6: Limitation de responsabilité",
          text: `6.1 La responsabilité de SOLAR SHOP est expressément limitée à la réparation des dommages directs résultant exclusivement de sa faute grave et intentionnelle ou de celle de l'un de ses employés.
          6.2 La responsabilité de SOLAR SHOP est expressément exclue en cas de faute grave, non intentionnelle et même de faute(s) légère(s) répétée(s), sans que cette énumération soit exhaustive.
          6.3 Dans tous les cas, la responsabilité de SOLAR SHOP est exclusivement limitée au remplacement ou à la réparation de la conformité des biens.
          6.4 Les dommages indirects sont expressément exclus. En particulier, les dommages indirects comprennent toute perte ou détérioration de données, perte de profit, perte de clientèle, etc.
          6.5 SOLAR SHOP décline toute responsabilité en cas de dommages aux personnes, aux biens ou au produit vendu, causés par le montage, le stockage ou toute autre cause, même inconnue.
          6.6 En cas de défaut spécifique au produit livré, le Client doit en informer immédiatement SOLAR SHOP.`
        },
        {
          title: "Article 7: Réserve de propriété",
          text: `7.1 Les biens livrés restent la propriété entière de SOLAR SHOP jusqu'au paiement intégral du prix, même en cas de transformation ou de traitement de ces produits en d'autres biens. Jusqu'à ce moment, SOLAR SHOP peut en disposer librement et entièrement. Inversement, le Client, tant que le paiement n'a pas été intégralement effectué, ne peut disposer des biens, les transformer, les aliéner, les transmettre, les graver et/ou les mettre à la disposition d'un tiers sous quelque titre que ce soit. Cette réserve de propriété s'applique également en cas de faillite, de réorganisation ou de liquidation judiciaire.
          7.2 Les dispositions ci-dessus n'empêchent pas qu'à la livraison ou à l'enlèvement des biens vendus, les risques de perte, de vol ou de détérioration des biens sur lesquels repose la réserve de propriété, ainsi que les dommages qu'ils pourraient causer, soient transférés au Client.`
        },
        {
          title: "Article 8: Équipements électriques et électroniques usagés",
          text: `SOLAR SHOP se conforme à la législation belge édictée par les Régions concernant les équipements électriques et électroniques usagés (EEE). Pour ce faire, le prix des produits et biens n'inclut pas les coûts de collecte et de traitement des équipements électriques et électroniques usagés, qui s'ajoutent au prix. Le Client est invité à contacter SOLAR SHOP pour en savoir plus sur les méthodes de collecte et de traitement de ses équipements électriques et électroniques usagés.`
        },
        {
          title: "Article 9: Confidentialité",
          text: `9.1 SOLAR SHOP traite les données personnelles pour la gestion de son fichier clients, pour l'exécution de programmes de fidélité, ainsi que pour la promotion de ses produits, conformément à la législation sur la protection des données et, plus spécifiquement, au Règlement Général sur la Protection des Données (RGPD) et à la loi du 30 juillet 2018 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. SOLAR SHOP est le responsable du traitement au sens du RGPD. Les données sont traitées soit sur la base de l'exécution du contrat entre SOLAR SHOP et le Client, soit sur la base de ses obligations légales, notamment en matière comptable. Les données sont traitées pour une période ne dépassant pas celle nécessaire pour atteindre les finalités susmentionnées. En tout état de cause, elles sont supprimées après une période de 7 ans à compter de la fin de la relation contractuelle.
          9.2 Dès que ses données personnelles sont traitées, le Client dispose de droits : le droit d'accès aux données traitées et de les corriger si nécessaire, le droit de limitation du traitement, le droit à l'effacement des données et le droit à la portabilité des données. Toute demande relative à l'exercice de l'un ou plusieurs de ces droits doit être adressée à SOLAR SHOP (soit par e-mail : spl@solarstock.be ; soit par courrier ordinaire : SOLAR SHOP, Bergensesteenweg 458 à 1600 Sint-Pieters-Leeuw).
          9.3 Sauf en cas d'obligation légale, ou lorsque la bonne exécution du contrat l'exige, aucune donnée personnelle concernant le Client n'est transférée à un tiers au sens du RGPD sans leur consentement, notamment à des fins de marketing.`
        },
        {
          title: "Article 10: Propriété intellectuelle",
          text: `Le site www.solarstock.be et tous les éléments sous-jacents, à l'exception de certains (hyper)liens menant à des sites Web en dehors du domaine de SOLAR SHOP, sont la propriété de l'entreprise SOLAR SHOP. Les photos, illustrations, acronymes, logos, ainsi que les descriptions et fiches produits, ou tout autre contenu apparaissant sur le site, sont protégés par des droits d'auteur/propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, du site ou de l'un de ses éléments sur quelque support ou de quelque manière que ce soit est interdite. Le non-respect de cette interdiction constitue le délit de contrefaçon et est passible de poursuites civiles et pénales.`
        },
        {
          title: "Article 11: Force majeure",
          text: `SOLAR SHOP se réserve le droit d'annuler les commandes, sans indemnité, si un cas de force majeure empêche leur exécution normale. Par accord exprès, les grèves, le manque de transport, l'incendie, l'inondation, les dommages aux équipements, les émeutes, la guerre, l'épidémie, l'accident, que ce soit chez SOLAR SHOP ou chez l'un de ses fournisseurs, seront considérés comme des cas de force majeure, même s'ils ne sont que partiels, et quelle qu'en soit la cause. Cette liste n'est pas exhaustive. Ne sera pas considéré comme un cas de force majeure : l'impossibilité financière pour le Client de payer SOLAR SHOP.`
        },
        {
          title: "Article 12: Réclamations et litiges",
          text: `12.1 En cas de réclamation, celle-ci doit être envoyée par e-mail à l'adresse suivante : spl@solarstock.be. Pour toute réclamation d'un acheteur, SOLAR SHOP, avec la plus grande objectivité possible et en conservant un esprit commercial, proposera la solution qu'elle juge appropriée. En cas de désaccord entre SOLAR SHOP et un Consommateur, seuls les tribunaux de Bruxelles sont compétents, sans préjudice des dispositions du Code judiciaire applicables en cas de litige entre SOLAR SHOP et un Consommateur. Le droit belge s'applique à ces conditions générales.
          12.2 Si, pour une raison quelconque, une disposition de ces conditions générales devait être déclarée inapplicable, cette inapplicabilité n'affecte pas l'application des autres dispositions des conditions générales. La clause inapplicable sera alors remplacée par une disposition qui s'en rapproche le plus.
          12.3 Ces Conditions Générales de Vente peuvent être modifiées à tout moment. Toute modification sera clairement indiquée sur le site. L'Acheteur s'engage à consulter les Conditions Générales de Vente en vigueur au moment de passer commande.
          12.4 srl. SOLAR SHOP, dont le siège social est situé à 1600 Sint-Pieters-Leeuw, Bergensesteenweg, 458, traite les données personnelles fournies par les acheteurs uniquement pour l'établissement des factures. Vous pouvez obtenir communication de vos données traitées par nos soins et, le cas échéant, demander la rectification de vos données en nous écrivant par e-mail à l'adresse spl@solarstock.be ou par courrier à l'adresse du siège social, ou par téléphone au 02 241 08 00. Les données fournies par le Client lors de la création de son compte sur le site seront utilisées et traitées par le Vendeur et/ou ses partenaires, dans le cadre de la gestion de la commande et pour la gestion relationnelle contractuelle. En créant un compte, l'Acheteur donne son consentement pour cette consultation, utilisation et/ou traitement. Le Vendeur et/ou ses partenaires s'engagent à respecter la législation en vigueur en Belgique en matière de protection de la vie privée. Les données personnelles collectées par le Vendeur sont soumises à la loi du 8 décembre 1992 relative à la protection de la vie privée à l'égard du traitement des données à caractère personnel.
          12.5 En cas de litige, les tribunaux de Bruxelles sont exclusivement compétents, sans préjudice des dispositions applicables du Code judiciaire s'il s'agit d'un litige entre SOLAR SHOP et un consommateur. Le droit belge s'applique à ces conditions générales.`
        }
      ]
    },
    nl: {
      title: "Algemene Verkoopvoorwaarden",
      cards: [
        {
          title: "Artikel 1: Aanbieding en bestelling",
          text: `1.1 De geldigheidsduur van de aanbiedingen staat daarin vermeld. Tenzij anders vermeld, zijn aanbiedingen uitgedrukt in euro's (EUR) en bedraagt de geldigheidsduur 1 (één) maand. SOLAR SHOP is echter vrij haar aanbod in te trekken totdat het door de Klant is aanvaard.
          1.2 Elke bestelling van een Klant bindt laatstgenoemde door de enkele verzending van zijn bestelling. De interne organisatie van de Klant kan niet aan SOLAR SHOP worden tegengeworpen en de werknemers, vertegenwoordigers, agenten of tussenpersonen van de Klant worden onweerlegbaar geacht over de vereiste volmacht te beschikken om de Klant aan SOLAR SHOP te binden. Omgekeerd hebben de werknemers, vertegenwoordigers, agenten en tussenpersonen van SOLAR SHOP geen bevoegdheid om SOLAR SHOP te binden. Toezeggingen gedaan door agenten, distributeurs of vertegenwoordigers van SOLAR SHOP worden pas definitief na aanvaarding door SOLAR SHOP.
          1.3 SOLAR SHOP behoudt zich te allen tijde en onder alle omstandigheden het recht voor om fouten in de orderbevestigingen die eventueel in de aanbiedingen zijn gemaakt, van welke aard dan ook (prijs, termijn etc.) te corrigeren. SOLAR SHOP heeft ook de mogelijkheid om op elk moment de voorwaarden van de bestelling (inclusief het schema) die de Klant aanvaardt te wijzigen, zolang dit het contract niet verstoort.
          1.4 Bij een bestelling van maatwerk of off-plan producten stelt SOLAR SHOP de offerte op op basis van de door de Klant meegedeelde afmetingen. Deze laatste is volledig verantwoordelijk voor de juistheid van de meegedeelde metingen en is verantwoordelijk voor het controleren van de correcte transcriptie van deze metingen op de bestelbon.
          1.5 Indien de bestelling online (via de webshop) werd geplaatst, heeft de gebruiker het recht om zijn aankoop, zonder opgave van reden en zonder bijbetaling, te annuleren binnen 14 kalenderdagen vanaf de dag die volgt op de levering. Tijdens deze 14 dagen moet de consument SOLAR SHOP op de hoogte stellen van zijn voornemen om te herroepen, met vermelding van het artikel dat hij wil retourneren, met vermelding van de prijs en het referentienummer. Hierop worden ook het bestelnummer en de leverdatum vermeld. Het e-commerceteam zal onmiddellijk de retourzending van het artikel regelen op een tussen de partijen overeengekomen datum. SOLAR SHOP zal het bedrag van het artikel volledig terugbetalen, op voorwaarde dat de goederen compleet, in perfecte staat, ongebruikt en in de originele verpakking zijn. Transportkosten worden op geen enkele wijze aan de consument vergoed, ook niet als de bestelling in zijn geheel wordt geretourneerd. En de kosten die inherent zijn aan deze retourzending zijn voor zijn rekening. Zodra het artikel in het bezit is van SOLAR SHOP, vindt de terugbetaling plaats.
          1.6 Er zijn omstandigheden waarin de consument geen gebruik kan maken van een herroepingsrecht. Onder andere:
          a. voor dienstenovereenkomsten nadat de dienst volledig is uitgevoerd, indien de uitvoering is begonnen met het voorafgaande uitdrukkelijke akkoord van de consument, die tevens heeft erkend dat hij zijn herroepingsrecht zal verliezen zodra de overeenkomst volledig is uitgevoerd.
          b. voor de levering van goederen of diensten waarvan de prijs afhankelijk is van schommelingen op de financiële markt die buiten controle zijn en die zich waarschijnlijk tijdens de herroepingstermijn zullen voordoen.
          c. voor de levering van goederen die volgens de specificaties van de consument zijn gemaakt (op maat gemaakt) of duidelijk gepersonaliseerd zijn.
          d. voor de levering van goederen die snel kunnen bederven of verlopen.
          e. voor de levering van goederen die, na levering, en door hun aard, onlosmakelijk vermengd zijn met andere zaken (bijvoorbeeld brandbare stoffen).
          Ondanks alle zorg die wordt besteed aan het online zetten van ons assortiment producten, is de site www.solarstock.be niet immuun voor de aanwezigheid van foutieve inhoud die verband houdt met verwarrende, onvolledige, onnauwkeurige of onjuiste geschreven informatie. Ook kan de site af en toe onderhevig zijn aan technische storingen. Zodra zij hiervan kennis krijgt, stelt SOLAR SHOP alles in het werk om deze tekortkomingen zo snel mogelijk te verhelpen. Het bedrijf SOLAR SHOP wijst elke aansprakelijkheid af voor directe of indirecte schade, van materiële of immateriële aard, veroorzaakt door haar site en aanverwante websites. Of het nu gaat om prijs, beeldmateriaal of teksten, fouten die op de site worden vermeld, geven de koper niet het recht om de betaling voor een product te annuleren of enige schadevergoeding te eisen. Voor elk geschil van de koper zal SOLAR SHOP, met de grootst mogelijke objectiviteit en met behoud van commerciële geest, de oplossing bieden die zij passend acht.
          1.7 SOLAR SHOP honoreert alle bestellingen binnen de grenzen van de beschikbare voorraden.`
        },
        {
          title: "Artikel 2: Prijs",
          text: `2.1 Tenzij anders bepaald, zijn de prijzen ofwel exclusief BTW voor professionelen, ofwel inclusief BTW en BTW voor particulieren, tegen het tarief dat geldt op de dag van de bestelling. Elke wijziging in het tarief kan worden weerspiegeld in de prijs van de goederen. Indien SOLAR SHOP het transport of de organisatie ervan verzorgt, zal SOLAR SHOP de Klant bovendien de transportkosten factureren, die deze laatste aanvaardt. Ook verpakking passend bij de wijze van transport wordt in rekening gebracht.
          2.2 SOLAR SHOP behoudt zich het recht voor om het bedrag van haar facturen aan te passen aan de stijging van de productie- of inkoop-/leveringskosten die SOLAR SHOP mogelijk heeft geleden, tussen de datum van verzending van de orderbevestiging en de datum van effectieve levering van producten/goederen.`
        },
        {
          title: "Artikel 3: Betaling en betalingsvoorwaarden",
          text: `3.1 Onze facturen zijn betaalbaar op de vervaldag, ongeacht de levertijd. Bij ontstentenis van een vervaldatum worden zij geacht contant betaalbaar te zijn.
          3.2 Een geschil met betrekking tot onze geleverde diensten en/of geleverde goederen kan geen reden zijn voor niet-tijdige betaling of niet-betaling van facturen van SOLAR SHOP.
          3.3 Het versturen van de factuur geldt als een aanmaning tot betaling op de daarin vermelde vervaldatum.
          3.4 Bij gebreke van gehele of gedeeltelijke niet-betaling van een factuur wordt het resterende verschuldigde bedrag van rechtswege en zonder ingebrekestelling verhoogd met een rente van 12% per jaar, waarbij elke begonnen maand verschuldigd is. Elke factuur die op de vervaldag onbetaald blijft, zal bovendien worden verhoogd met een forfaitaire en onherleidbare schadevergoeding gelijk aan 15% van het resterende verschuldigde saldo, met een minimum van € 75, onder de boeteclausule.
          3.5 Het niet betalen van een factuur op de vervaldag maakt automatisch alle andere facturen opeisbaar, zelfs de facturen die nog niet vervallen zijn.
          3.6 Bij gebreke van betaling op de vervaldag behoudt SOLAR SHOP zich het recht voor om de uitvoering van het huidige contract, evenals elke andere bestelling, geheel of gedeeltelijk op te schorten tot de dag van volledige betaling door de Klant van de facturen, zelfs als deze niet opeisbaar is, vermeerderd met contractuele rente en schadevergoeding.
          3.7 Ten slotte leidt elk verzoek tot reorganisatie of gerechtelijke liquidatie, schuldbemiddeling, surseance van betaling of enig ander feit dat de insolventie van de Klant kan impliceren of doen vermoeden, automatisch tot het verlies van de Klant zonder voorafgaande kennisgeving alle openstaande facturen. Bovendien geven deze situaties SOLAR SHOP het recht om alle verplichtingen van SOLAR SHOP op te schorten zonder voorafgaande formaliteit en om lopende contracten geheel of gedeeltelijk te beëindigen zonder enige andere formaliteit dan kennisgeving per aangetekende post of e-mail.
          3.8 Administratieve, technische of andere kosten verbonden aan laattijdige betaling zijn volledig de verantwoordelijkheid van de Klant.
          3.9 Elke klacht met betrekking tot een factuur moet uiterlijk acht kalenderdagen na ontvangst worden verzonden, hetzij per e-mail: spl@solarstock.be; of per aangetekende post: SOLAR SHOP, Bergensesteenweg 458 te 1600 Sint-Pieters-Leeuw.`
        },
        {
          title: "Artikel 4: Levering, controle en ontvangst van de GOEDEREN",
          text: `4.1 Op verzoek van de Klant kunnen de goederen worden afgeleverd op het adres van zijn keuze. De leveringskosten worden naast de Klant gefactureerd. De Klant is verantwoordelijk voor de juistheid van de leveringsinformatie. Levering in België is alleen mogelijk.
          4.2 Levertijden zijn indicatief en overschrijding ervan kan in geen geval aanleiding geven tot het toekennen van schadevergoeding of annulering van de bestelling.
          4.3 Het is aan de Klant om bij ontvangst van de producten/goederen op duidelijke en nauwkeurige wijze eventuele nuttige voorbehouden te maken aan de vervoerder (op de leveringsbon), op straffe van verval. SOLAR SHOP kan in geen geval aansprakelijk worden gesteld voor incidenten of schade verbonden aan het transport.
          4.4 De Klant verbindt zich ertoe de producten/goederen bij ontvangst te controleren op kwaliteit en kwantiteit en op hun conformiteit met de bestelling. Elke klacht met betrekking tot de goederen wordt als nietig beschouwd als deze niet binnen de 48 uur schriftelijk (hetzij per e-mail: spl@solarstock.be; hetzij per gewone post: SOLAR SHOP, Bergensesteenweg 458 te 1600 Sint-Pieters-Leeuw) wordt ingediend na levering. Bij gebreke daarvan kan de koper geen beroep meer doen op deze gebrek(en).
          4.5 Tenzij anders overeengekomen geschiedt levering "franco af fabriek/magazijn op de door SOLAR SHOP aangewezen plaats.`
        },
        {
          title: "Artikel 5: Garantie",
          text: `5.1 SOLAR SHOP levert aan de Klant goederen die beantwoorden aan de overeenkomst. In geval van gebrek aan overeenstemming beschikt de niet-professionele Klant over een wettelijke garantie van twee (2) jaar, waardoor hij binnen acht (8) dagen na ontdekking een klacht kan indienen bij de klantenservice van SOLAR SHOP of de datum waarop de Klant er redelijkerwijs niet van op de hoogte kon zijn. De niet-professionele Klant die van de wettelijke garantie wil genieten, overlegt daartoe de factuur of het originele aankoopbewijs.
          5.2 Voornoemde wettelijke garantie geldt niet in de volgende gevallen:
          - als het gebrek het gevolg is van normale slijtage van het product;
          - als het defect is veroorzaakt door onoordeelkundig gebruik of slecht onderhoud van het product;
          - als de storing een externe oorzaak heeft;
          - als de Klant op het moment van aankoop op de hoogte was of redelijkerwijs niet onbewust kon zijn van het gebrek.
          5.3 Wanneer de door SOLAR SHOP geboden garantie langer is dan twee (2) jaar, wordt de duur ervan aangegeven bij de producteigenschappen.`
        },
        {
          title: "Artikel 6: Beperking van aansprakelijkheid",
          text: `6.1 De aansprakelijkheid van SOLAR SHOP is uitdrukkelijk beperkt tot het herstel van directe schade die uitsluitend voortvloeit uit haar grove en opzettelijke fout of die van een van haar medewerkers.
          6.2 De aansprakelijkheid van SOLAR SHOP wordt uitdrukkelijk uitgesloten in geval van ernstige, onbedoelde fout en zelfs herhaalde lichte fout(en), zonder dat deze opsomming uitputtend is.
          6.3 In alle gevallen is de aansprakelijkheid van SOLAR SHOP uitsluitend beperkt tot de vervanging of het herstel van de conformiteit van de goederen.
          6.4 Gevolgschade is uitdrukkelijk uitgesloten. In het bijzonder omvat indirecte schade elk verlies of beschadiging van gegevens, winstderving, verlies van klanten, enz.
          6.5 SOLAR SHOP wijst elke aansprakelijkheid af in geval van schade aan personen, eigendommen of het verkochte product, veroorzaakt door montage, opslag of elke andere oorzaak, ook al is deze onbekend.
          6.6 Indien zich een gebrek voordoet dat specifiek is aan het geleverde product, dient de Klant SOLAR SHOP onmiddellijk op de hoogte te stellen.`
        },
        {
          title: "Artikel 7: Eigendomsvoorbehoud",
          text: `7.1 De geleverde goederen blijven de volledige eigendom van SOLAR SHOP tot de volledige betaling van de prijs, zelfs in geval van transformatie of verwerking van deze producten in andere goederen. Tot dat moment kan SOLAR SHOP er vrij en volledig over beschikken. Omgekeerd mag de Klant, zolang de betaling niet volledig heeft plaatsgevonden, niet over de goederen beschikken, ze niet transformeren, vervreemden, doorgeven, graveren en/of onder welke titel dan ook aan een derde ter beschikking stellen. Dit eigendomsvoorbehoud geldt eveneens in geval van faillissement, reorganisatie of gerechtelijke liquidatie.
          7.2 De bovenstaande bepalingen verhinderen niet dat bij de levering of afhaling van de verkochte goederen de risico's van verlies, diefstal of beschadiging van de goederen waarop het eigendomsvoorbehoud rust, evenals de schade die zij zouden kunnen veroorzaken, op de Klant overgaan.`
        },
        {
          title: "Artikel 8: Afgedankte elektrische en elektronische apparatuur",
          text: `SOLAR SHOP voldoet aan de Belgische wetgeving uitgevaardigd door de Gewesten inzake afgedankte elektrische en elektronische apparatuur (AEEA). Om dit te doen, omvat de prijs van de producten en goederen niet de kosten voor het verzamelen en verwerken van afgedankte elektrische en elektronische apparatuur, die bovenop de prijs komt. De Klant wordt verzocht contact op te nemen met SOLAR SHOP om meer te weten te komen over de methoden voor het inzamelen en verwerken van zijn afgedankte elektrische en elektronische apparatuur.`
        },
        {
          title: "Artikel 9: Privacy",
          text: `9.1 SOLAR SHOP verwerkt persoonsgegevens voor het beheer van haar klantenbestand, voor de uitvoering van loyaliteitsprogramma's, evenals voor de promotie van haar producten, in overeenstemming met de wetgeving inzake gegevensbescherming en, meer specifiek, de Algemene Verordening Gegevensbescherming (AVG) en de wet van 30 juli 2018 betreffende de bescherming van natuurlijke personen in verband met de verwerking van persoonsgegevens. SOLAR SHOP is de verwerkingsverantwoordelijke in de zin van de AVG. De gegevens worden verwerkt hetzij op basis van de uitvoering van het contract tussen SOLAR SHOP en de Klant, hetzij op basis van zijn wettelijke verplichtingen, in het bijzonder op boekhoudkundig gebied. De gegevens worden verwerkt voor een periode die niet langer duurt dan nodig is om de bovengenoemde doeleinden te bereiken. In ieder geval worden ze verwijderd na een periode van 7 jaar vanaf het einde van de contractuele relatie.
          9.2 Zodra zijn persoonsgegevens worden verwerkt, beschikt de Klant over rechten: het recht op toegang tot de verwerkte gegevens en om deze indien nodig te corrigeren, het recht op beperking van de verwerking, het recht op verwijdering van gegevens en het recht op gegevensoverdraagbaarheid. Elk verzoek met betrekking tot de uitvoering van één of meer van deze rechten moet worden gericht aan SOLAR SHOP (hetzij per e-mail: spl@solarstock.be; of per gewone post: SOLAR SHOP, Bergensesteenweg 458 te 1600 Sint-Pieters-Leeuw).
          9.3 Behalve in geval van een wettelijke verplichting, of wanneer de goede uitvoering van de overeenkomst dit vereist, worden er geen persoonsgegevens met betrekking tot de Klant overgedragen aan een derde partij in de zin van de AVG zonder hun toestemming, onder meer voor marketingdoeleinden.`
        },
        {
          title: "Artikel 10: Intellectueel eigendom",
          text: `De site www.solarstock.be en alle onderliggende onderdelen, met uitzondering van bepaalde (hyper)links die naar websites buiten het domein van SOLAR SHOP leiden, zijn eigendom van het bedrijf SOLAR SHOP. De foto's, illustraties, acroniemen, logo's, evenals de beschrijvingen en productbladen, of enige andere inhoud die op de site verschijnt, zijn beschermd door auteursrechten/intellectuele eigendom. Elke reproductie of weergave, geheel of gedeeltelijk, van de site of enig onderdeel ervan op welk medium of op welke manier dan ook is verboden. Het niet naleven van dit verbod vormt het misdrijf van namaak en is onderworpen aan civiele en strafrechtelijke vervolging.`
        },
        {
          title: "Artikel 11: Overmacht",
          text: `SOLAR SHOP behoudt zich het recht voor om bestellingen te annuleren, zonder schadevergoeding, indien een geval van overmacht de normale uitvoering ervan verhindert. Bij uitdrukkelijke overeenkomst zullen stakingen, tekort aan transport, brand, overstroming, schade aan uitrusting, rellen, oorlog, epidemie, ongeval, hetzij bij SOLAR SHOP, hetzij bij een van haar leveranciers, als overmacht worden beschouwd, zelfs als ze slechts gedeeltelijk, en wat de oorzaak ook is. Cette liste n'est pas exhaustive. Ne sera pas considéré comme un cas de force majeure : l'impossibilité financière pour le Client de payer SOLAR SHOP.`
        },
        {
          title: "Artikel 12: Klachten en geschillen",
          text: `12.1 En cas de réclamation, celle-ci doit être envoyée par e-mail à l'adresse suivante : spl@solarstock.be. Pour toute réclamation d'un acheteur, SOLAR SHOP, avec la plus grande objectivité possible et en conservant un esprit commercial, proposera la solution qu'elle juge appropriée. En cas de désaccord entre SOLAR SHOP et un Consommateur, seuls les tribunaux de Bruxelles sont compétents, sans préjudice des dispositions du Code judiciaire applicables en cas de litige entre SOLAR SHOP et un Consommateur. Le droit belge s'applique à ces conditions générales.
          12.2 Si, pour une raison quelconque, une disposition de ces conditions générales devait être déclarée inapplicable, cette inapplicabilité n'affecte pas l'application des autres dispositions des conditions générales. La clause inapplicable sera alors remplacée par une disposition qui s'en rapproche le plus.
          12.3 Ces Conditions Générales de Vente peuvent être modifiées à tout moment. Toute modification sera clairement indiquée sur le site. L'Acheteur s'engage à consulter les Conditions Générales de Vente en vigueur au moment de passer commande.
          12.4 srl. SOLAR SHOP, dont le siège social est situé à 1600 Sint-Pieters-Leeuw, Bergensesteenweg, 458, traite les données personnelles fournies par les acheteurs uniquement pour l'établissement des factures. Vous pouvez obtenir communication de vos données traitées par nos soins et, le cas échéant, demander la rectification de vos données en nous écrivant par e-mail à l'adresse spl@solarstock.be ou par courrier à l'adresse du siège social, ou par téléphone au 02 241 08 00. Les données fournies par le Client lors de la création de son compte sur le site seront utilisées et traitées par le Vendeur et/ou ses partenaires, dans le cadre de la gestion de la commande et pour la gestion relationnelle contractuelle. En créant un compte, l'Acheteur donne son consentement pour cette consultation, utilisation et/ou traitement. De Verkoper en/of zijn partners verbinden zich ertoe de wetgeving inzake de bescherming van de persoonlijke levenssfeer die in België van kracht is, te respecteren. De persoonsgegevens die de Verkoper verzamelt zijn onderworpen aan de wet van 8 december 1992 tot bescherming van de persoonlijke levenssfeer ten opzichte van de verwerking van persoonsgegevens.
          12.5 En cas de litige, les tribunaux de Bruxelles sont exclusivement compétents, sans préjudice des dispositions applicables du Code judiciaire s'il s'agit d'un litige entre SOLAR SHOP et un consommateur. Le droit belge s'applique à ces conditions générales.`
        }
      ]
    }
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return <IndustrialComponent content={currentContent} />;
}
