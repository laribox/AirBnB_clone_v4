<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- HEAD -->

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Holberton AirBnB</title>

    <!-- FAVICON -->

    <link rel="shortcut icon" href="../static/images/icon.png?{{ cache_id }}">

    <!-- **********************
     CSS styles
     ********************** -->

    <link rel="stylesheet" href="../static/styles/4-common.css?{{ cache_id }}">
    <link rel="stylesheet" href="../static/styles/3-header.css?{{ cache_id }}">
    <link rel="stylesheet" href="../static/styles/3-footer.css?{{ cache_id }}">
    <link rel="stylesheet" href="../static/styles/6-filters.css?{{ cache_id }}">
    <link rel="stylesheet" href="../static/styles/8-places.css?{{ cache_id }}">
    <link rel="stylesheet" href="../static/styles/font-awesome.css?{{ cache_id }}">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="../static/scripts/100-hbnb.js?{{ cache_id }}"></script>
  </head>

  <!-- **********************
       BODY
       ********************** -->

  <body>

    <!-- **********************
     HEADER
     ********************** -->

    <header>
      <div id="api_status"></div>
    </header>
    <main>
      <div class="container">

    <!-- **********************
         FILTERS
         ********************** -->

    <section class="filters">

      <!-- **********************
           LOCATIONS
           ********************** -->

      <div class="locations">
        <h3>States</h3>
        <h4>&nbsp;</h4>
        <ul class="popover">
          {% for state in states|sort(attribute='name') %}
          <li>
        <H2><INPUT class="stateCheckBox" type="checkbox" data-id="{{ state.id }}" data-name="{{ state.name }}">{{ state.name }}</H2>
        <UL>
          {% for city in state.cities|sort(attribute='name') %}
          <li><INPUT class="cityCheckBox" type="checkbox" data-id="{{ city.id }}" data-name="{{ city.name }}">{{ city.name }}</li>
          {% endfor %}
        </UL>
          </li>
          {% endfor %}
        </ul>
      </div>

      <!-- **********************
           AMENITIES
           ********************** -->

      <div class="amenities">
        <h3>Amenities</h3>
        <h4>&nbsp;</h4>
        <ul class="popover">
          {% for amenity in amens|sort(attribute='name') %}
          <LI><INPUT type="checkbox" data-id="{{ amenity.id }}" data-name="{{ amenity.name }}">{{ amenity.name }}</LI>
          {% endfor %}
        </ul>
      </div>

      <!-- **********************
           SEARCH BUTTON
           ********************** -->

      <button>Search</button>
    </section>

    <section class="places">
      <h1>Places</h1>

    <!-- **********************
         BEGIN 1 PLACE
         ********************** -->

    </section>
      </div>
    </main>

    <!-- FOOTER -->

    <footer>
      Holberton School
    </footer>
  </body>
</html>
