(function () {
        StatsLookupA();	
    });
	
    function StatsLookupA(ShipID){
		
		var x =[];
		var x = document.getElementById("format").value;
		
		if (x == "1")
	{
	var localeselect = 'da-DK';
	}
	else
	
	var localeselect = 'en-us';

				
		$.getJSON("js/shipdata.json", function(json) {
 

	var DatasetValue = [0];
	  /*var DatasetValue = document.getElementById("dataset").value;*/
	  
	  if (DatasetValue == "0")
	{
	var shipdata = json.Legacy;
	}
	else
	
	var shipdata = json.Ships;

 
 

//Comparison hidden values
document.getElementById("model_a_value").value = ( shipdata[ ShipID ].model );
document.getElementById("level_a_value").value = ( shipdata[ ShipID ].level );
document.getElementById("type_a_value").value = ( shipdata[ ShipID ].type );
document.getElementById("variant_a_value").value = ( shipdata[ ShipID ].variant );
document.getElementById("size_a_value").value = ( shipdata[ ShipID ].size );
document.getElementById("classes_a_value").value = ( shipdata[ ShipID ].classes );


document.getElementById("cargo_capacity_a_value").value = ( shipdata[ ShipID ].cargo_capacity );
document.getElementById("os_visibility_a_value").value = ( shipdata[ ShipID ].os_visibility );
document.getElementById("os_spotting_a_value").value = ( shipdata[ ShipID ].os_spotting );
document.getElementById("crew_a_value").value = ( shipdata[ ShipID ].crew );
document.getElementById("target_tracking_a_value").value = ( shipdata[ ShipID ].target_tracking );
document.getElementById("base_durability_a_value").value = ( shipdata[ ShipID ].base_durability );
document.getElementById("insurance_value_a_value").value = ( shipdata[ ShipID ].insurance_value );


document.getElementById("os_best_sailing_point_a_value").value = ( shipdata[ ShipID ].os_best_sailing_point );
document.getElementById("os_max_speed_a_value").value = ( shipdata[ ShipID ].os_max_speed );

document.getElementById("os_upwind_speed_a_value").value = ( shipdata[ ShipID ].os_upwind_speed );
document.getElementById("os_luffing_speed_a_value").value = ( shipdata[ ShipID ].os_luffing_speed );
document.getElementById("os_close_haul_speed_a_value").value = ( shipdata[ ShipID ].os_close_haul_speed );
document.getElementById("os_beam_reach_speed_a_value").value = ( shipdata[ ShipID ].os_beam_reach_speed );
document.getElementById("os_broad_reach_speed_a_value").value = ( shipdata[ ShipID ].os_broad_reach_speed );
document.getElementById("os_running_speed_a_value").value = ( shipdata[ ShipID ].os_running_speed );



document.getElementById("battle_best_sailing_point_a_value").value = ( shipdata[ ShipID ].battle_best_sailing_point );
document.getElementById("battle_max_speed_a_value").value = ( shipdata[ ShipID ].battle_max_speed );
document.getElementById("battle_acceleration_a_value").value = ( shipdata[ ShipID ].battle_acceleration );
document.getElementById("battle_deceleration_a_value").value = ( shipdata[ ShipID ].battle_deceleration );
document.getElementById("battle_turning_fast_a_value").value = ( shipdata[ ShipID ].battle_turning_fast );
document.getElementById("battle_turning_slow_a_value").value = ( shipdata[ ShipID ].battle_turning_slow );
document.getElementById("battle_turning_accelerating_a_value").value = ( shipdata[ ShipID ].battle_turning_accelerating );
document.getElementById("battle_turning_decelerating_a_value").value = ( shipdata[ ShipID ].battle_turning_decelerating );

document.getElementById("battle_upwind_speed_a_value").value = ( shipdata[ ShipID ].battle_upwind_speed );
document.getElementById("battle_luffing_speed_a_value").value = ( shipdata[ ShipID ].battle_luffing_speed );
document.getElementById("battle_close_haul_speed_a_value").value = ( shipdata[ ShipID ].battle_close_haul_speed );
document.getElementById("battle_beam_reach_speed_a_value").value = ( shipdata[ ShipID ].battle_beam_reach_speed );
document.getElementById("battle_broad_reach_speed_a_value").value = ( shipdata[ ShipID ].battle_broad_reach_speed );
document.getElementById("battle_running_speed_a_value").value = ( shipdata[ ShipID ].battle_running_speed );



document.getElementById("structure_integrity_a_value").value = ( shipdata[ ShipID ].structure_integrity );
document.getElementById("port_armour_a_value").value = ( shipdata[ ShipID ].port_armour );
document.getElementById("starboard_armour_a_value").value = ( shipdata[ ShipID ].starboard_armour );
document.getElementById("bow_armour_a_value").value = ( shipdata[ ShipID ].bow_armour );
document.getElementById("stern_armour_a_value").value = ( shipdata[ ShipID ].stern_armour );
document.getElementById("mast_integrity_a_value").value = ( shipdata[ ShipID ].mast_integrity );

document.getElementById("structure_dr_a_value").value = ( shipdata[ ShipID ].structure_dr );
document.getElementById("port_dr_a_value").value = ( shipdata[ ShipID ].port_dr );
document.getElementById("starboard_dr_a_value").value = ( shipdata[ ShipID ].starboard_dr );
document.getElementById("bow_dr_a_value").value = ( shipdata[ ShipID ].bow_dr );
document.getElementById("stern_dr_a_value").value = ( shipdata[ ShipID ].stern_dr );
document.getElementById("mast_dr_a_value").value = ( shipdata[ ShipID ].mast_dr );



document.getElementById("mast_offence_a_value").value = ( shipdata[ ShipID ].mast_offence );
document.getElementById("mast_defence_a_value").value = ( shipdata[ ShipID ].mast_defence );
document.getElementById("mast_resist_a_value").value = ( shipdata[ ShipID ].mast_resist );

document.getElementById("crew_offence_a_value").value = ( shipdata[ ShipID ].crew_offence );
document.getElementById("crew_defence_a_value").value = ( shipdata[ ShipID ].crew_defence );
document.getElementById("crew_resist_a_value").value = ( shipdata[ ShipID ].crew_resist );

document.getElementById("bow_offence_a_value").value = ( shipdata[ ShipID ].bow_offence );
document.getElementById("bow_defence_a_value").value = ( shipdata[ ShipID ].bow_defence );
document.getElementById("bow_resist_a_value").value = ( shipdata[ ShipID ].bow_resist );

document.getElementById("stern_offence_a_value").value = ( shipdata[ ShipID ].stern_offence );
document.getElementById("stern_defence_a_value").value = ( shipdata[ ShipID ].stern_defence );
document.getElementById("stern_resist_a_value").value = ( shipdata[ ShipID ].stern_resist );

document.getElementById("sides_offence_a_value").value = ( shipdata[ ShipID ].sides_offence );
document.getElementById("sides_defence_a_value").value = ( shipdata[ ShipID ].sides_defence );
document.getElementById("sides_resist_a_value").value = ( shipdata[ ShipID ].sides_resist );

document.getElementById("grappling_offence_a_value").value = ( shipdata[ ShipID ].grappling_offence );
document.getElementById("grappling_defence_a_value").value = ( shipdata[ ShipID ].grappling_defence );
document.getElementById("grappling_resist_a_value").value = ( shipdata[ ShipID ].grappling_resist );





document.getElementById("broadside_total_guns_a_value").value = ( shipdata[ ShipID ].broadside_total_guns );
document.getElementById("broadside_weight_a_value").value = ( shipdata[ ShipID ].broadside_weight );
document.getElementById("broadside_max_range_a_value").value = ( shipdata[ ShipID ].broadside_max_range );
document.getElementById("broadside_max_damage_a_value").value = ( shipdata[ ShipID ].broadside_max_damage );
document.getElementById("broadside_damage_200_a_value").value = ( shipdata[ ShipID ].broadside_damage_200 );
document.getElementById("broadside_dps_200_a_value").value = ( shipdata[ ShipID ].broadside_dps_200 );
document.getElementById("broadside_damage_400_a_value").value = ( shipdata[ ShipID ].broadside_damage_400 );
document.getElementById("broadside_dps_400_a_value").value = ( shipdata[ ShipID ].broadside_dps_400 );



document.getElementById("top_deck_guns_per_side_a_value").value = ( shipdata[ ShipID ].top_deck_guns_per_side );
document.getElementById("top_deck_weight_a_value").value = ( shipdata[ ShipID ].top_deck_weight );
document.getElementById("top_deck_range_a_value").value = ( shipdata[ ShipID ].top_deck_range );
document.getElementById("top_deck_damage_gun_a_value").value = ( shipdata[ ShipID ].top_deck_damage_gun );
document.getElementById("top_deck_reload_a_value").value = ( shipdata[ ShipID ].top_deck_reload );
document.getElementById("top_deck_max_damage_a_value").value = ( shipdata[ ShipID ].top_deck_max_damage );
document.getElementById("top_deck_accuracy_200_a_value").value = ( shipdata[ ShipID ].top_deck_accuracy_200 );
document.getElementById("top_deck_damage_200_a_value").value = ( shipdata[ ShipID ].top_deck_damage_200 );
document.getElementById("top_deck_dps_200_a_value").value = ( shipdata[ ShipID ].top_deck_dps_200 );
document.getElementById("top_deck_accuracy_400_a_value").value = ( shipdata[ ShipID ].top_deck_accuracy_400 );
document.getElementById("top_deck_damage_400_a_value").value = ( shipdata[ ShipID ].top_deck_damage_400 );
document.getElementById("top_deck_dps_400_a_value").value = ( shipdata[ ShipID ].top_deck_dps_400 );



document.getElementById("upper_deck_guns_per_side_a_value").value = ( shipdata[ ShipID ].upper_deck_guns_per_side );
document.getElementById("upper_deck_weight_a_value").value = ( shipdata[ ShipID ].upper_deck_weight );
document.getElementById("upper_deck_range_a_value").value = ( shipdata[ ShipID ].upper_deck_range );
document.getElementById("upper_deck_damage_gun_a_value").value = ( shipdata[ ShipID ].upper_deck_damage_gun );
document.getElementById("upper_deck_reload_a_value").value = ( shipdata[ ShipID ].upper_deck_reload );
document.getElementById("upper_deck_max_damage_a_value").value = ( shipdata[ ShipID ].upper_deck_max_damage );
document.getElementById("upper_deck_accuracy_200_a_value").value = ( shipdata[ ShipID ].upper_deck_accuracy_200 );
document.getElementById("upper_deck_damage_200_a_value").value = ( shipdata[ ShipID ].upper_deck_damage_200 );
document.getElementById("upper_deck_dps_200_a_value").value = ( shipdata[ ShipID ].upper_deck_dps_200 );
document.getElementById("upper_deck_accuracy_400_a_value").value = ( shipdata[ ShipID ].upper_deck_accuracy_400 );
document.getElementById("upper_deck_damage_400_a_value").value = ( shipdata[ ShipID ].upper_deck_damage_400 );
document.getElementById("upper_deck_dps_400_a_value").value = ( shipdata[ ShipID ].upper_deck_dps_400 );



document.getElementById("middle_deck_guns_per_side_a_value").value = ( shipdata[ ShipID ].middle_deck_guns_per_side );
document.getElementById("middle_deck_weight_a_value").value = ( shipdata[ ShipID ].middle_deck_weight );
document.getElementById("middle_deck_range_a_value").value = ( shipdata[ ShipID ].middle_deck_range );
document.getElementById("middle_deck_damage_gun_a_value").value = ( shipdata[ ShipID ].middle_deck_damage_gun );
document.getElementById("middle_deck_reload_a_value").value = ( shipdata[ ShipID ].middle_deck_reload );
document.getElementById("middle_deck_max_damage_a_value").value = ( shipdata[ ShipID ].middle_deck_max_damage );
document.getElementById("middle_deck_accuracy_200_a_value").value = ( shipdata[ ShipID ].middle_deck_accuracy_200 );
document.getElementById("middle_deck_damage_200_a_value").value = ( shipdata[ ShipID ].middle_deck_damage_200 );
document.getElementById("middle_deck_dps_200_a_value").value = ( shipdata[ ShipID ].middle_deck_dps_200 );
document.getElementById("middle_deck_accuracy_400_a_value").value = ( shipdata[ ShipID ].middle_deck_accuracy_400 );
document.getElementById("middle_deck_damage_400_a_value").value = ( shipdata[ ShipID ].middle_deck_damage_400 );
document.getElementById("middle_deck_dps_400_a_value").value = ( shipdata[ ShipID ].middle_deck_dps_400 );



document.getElementById("gun_deck_guns_per_side_a_value").value = ( shipdata[ ShipID ].gun_deck_guns_per_side );
document.getElementById("gun_deck_weight_a_value").value = ( shipdata[ ShipID ].gun_deck_weight );
document.getElementById("gun_deck_range_a_value").value = ( shipdata[ ShipID ].gun_deck_range );
document.getElementById("gun_deck_damage_gun_a_value").value = ( shipdata[ ShipID ].gun_deck_damage_gun );
document.getElementById("gun_deck_reload_a_value").value = ( shipdata[ ShipID ].gun_deck_reload );
document.getElementById("gun_deck_max_damage_a_value").value = ( shipdata[ ShipID ].gun_deck_max_damage );
document.getElementById("gun_deck_accuracy_200_a_value").value = ( shipdata[ ShipID ].gun_deck_accuracy_200 );
document.getElementById("gun_deck_damage_200_a_value").value = ( shipdata[ ShipID ].gun_deck_damage_200 );
document.getElementById("gun_deck_dps_200_a_value").value = ( shipdata[ ShipID ].gun_deck_dps_200 );
document.getElementById("gun_deck_accuracy_400_a_value").value = ( shipdata[ ShipID ].gun_deck_accuracy_400 );
document.getElementById("gun_deck_damage_400_a_value").value = ( shipdata[ ShipID ].gun_deck_damage_400 );
document.getElementById("gun_deck_dps_400_a_value").value = ( shipdata[ ShipID ].gun_deck_dps_400 );



document.getElementById("bow_chasers_guns_per_side_a_value").value = ( shipdata[ ShipID ].bow_chasers_guns_per_side );
document.getElementById("bow_chasers_weight_a_value").value = ( shipdata[ ShipID ].bow_chasers_weight );
document.getElementById("bow_chasers_range_a_value").value = ( shipdata[ ShipID ].bow_chasers_range );
document.getElementById("bow_chasers_damage_gun_a_value").value = ( shipdata[ ShipID ].bow_chasers_damage_gun );
document.getElementById("bow_chasers_reload_a_value").value = ( shipdata[ ShipID ].bow_chasers_reload );
document.getElementById("bow_chasers_max_damage_a_value").value = ( shipdata[ ShipID ].bow_chasers_max_damage );
document.getElementById("bow_chasers_accuracy_200_a_value").value = ( shipdata[ ShipID ].bow_chasers_accuracy_200 );
document.getElementById("bow_chasers_damage_200_a_value").value = ( shipdata[ ShipID ].bow_chasers_damage_200 );
document.getElementById("bow_chasers_dps_200_a_value").value = ( shipdata[ ShipID ].bow_chasers_dps_200 );
document.getElementById("bow_chasers_accuracy_400_a_value").value = ( shipdata[ ShipID ].bow_chasers_accuracy_400 );
document.getElementById("bow_chasers_damage_400_a_value").value = ( shipdata[ ShipID ].bow_chasers_damage_400 );
document.getElementById("bow_chasers_dps_400_a_value").value = ( shipdata[ ShipID ].bow_chasers_dps_400 );



document.getElementById("stern_chasers_guns_per_side_a_value").value = ( shipdata[ ShipID ].stern_chasers_guns_per_side );
document.getElementById("stern_chasers_weight_a_value").value = ( shipdata[ ShipID ].stern_chasers_weight );
document.getElementById("stern_chasers_range_a_value").value = ( shipdata[ ShipID ].stern_chasers_range );
document.getElementById("stern_chasers_damage_gun_a_value").value = ( shipdata[ ShipID ].stern_chasers_damage_gun );
document.getElementById("stern_chasers_reload_a_value").value = ( shipdata[ ShipID ].stern_chasers_reload );
document.getElementById("stern_chasers_max_damage_a_value").value = ( shipdata[ ShipID ].stern_chasers_max_damage );
document.getElementById("stern_chasers_accuracy_200_a_value").value = ( shipdata[ ShipID ].stern_chasers_accuracy_200 );
document.getElementById("stern_chasers_damage_200_a_value").value = ( shipdata[ ShipID ].stern_chasers_damage_200 );
document.getElementById("stern_chasers_dps_200_a_value").value = ( shipdata[ ShipID ].stern_chasers_dps_200 );
document.getElementById("stern_chasers_accuracy_400_a_value").value = ( shipdata[ ShipID ].stern_chasers_accuracy_400 );
document.getElementById("stern_chasers_damage_400_a_value").value = ( shipdata[ ShipID ].stern_chasers_damage_400 );
document.getElementById("stern_chasers_dps_400_a_value").value = ( shipdata[ ShipID ].stern_chasers_dps_400 );



document.getElementById("swivel_guns_guns_per_side_a_value").value = ( shipdata[ ShipID ].swivel_guns_guns_per_side );
document.getElementById("swivel_guns_weight_a_value").value = ( shipdata[ ShipID ].swivel_guns_weight );
document.getElementById("swivel_guns_range_a_value").value = ( shipdata[ ShipID ].swivel_guns_range );
document.getElementById("swivel_guns_damage_gun_a_value").value = ( shipdata[ ShipID ].swivel_guns_damage_gun );
document.getElementById("swivel_guns_reload_a_value").value = ( shipdata[ ShipID ].swivel_guns_reload );
document.getElementById("swivel_guns_max_damage_a_value").value = ( shipdata[ ShipID ].swivel_guns_max_damage );
document.getElementById("swivel_accuracy_200_a_value").value = ( shipdata[ ShipID ].swivel_accuracy_200 );
document.getElementById("swivel_damage_200_a_value").value = ( shipdata[ ShipID ].swivel_damage_200 );
document.getElementById("swivel_dps_200_a_value").value = ( shipdata[ ShipID ].swivel_dps_200 );
document.getElementById("swivel_accuracy_400_a_value").value = ( shipdata[ ShipID ].swivel_accuracy_400 );
document.getElementById("swivel_damage_400_a_value").value = ( shipdata[ ShipID ].swivel_damage_400 );
document.getElementById("swivel_dps_400_a_value").value = ( shipdata[ ShipID ].swivel_dps_400 );

document.getElementById("last_updated_a_value").value = ( shipdata[ ShipID ].last_updated );





// Formatted visible values
		document.getElementById("model_a_header").innerHTML = ( shipdata[ ShipID ].model );
		document.getElementById("model_a").innerHTML = ( shipdata[ ShipID ].model );
		document.getElementById("level_a").innerHTML = ( shipdata[ ShipID ].level );
		document.getElementById("type_a").innerHTML = ( shipdata[ ShipID ].type );
		document.getElementById("variant_a").innerHTML = ( shipdata[ ShipID ].variant );
		document.getElementById("size_a").innerHTML = ( shipdata[ ShipID ].size );
		document.getElementById("classes_a").innerHTML = ( shipdata[ ShipID ].classes );

		document.getElementById("cargo_capacity_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].cargo_capacity )));
		document.getElementById("os_visibility_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_visibility )));
		document.getElementById("os_spotting_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_spotting )));
		document.getElementById("crew_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].crew )));
		document.getElementById("target_tracking_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].target_tracking )));
		document.getElementById("base_durability_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].base_durability )));
		document.getElementById("insurance_value_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].insurance_value )));

		document.getElementById("os_best_sailing_point_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_best_sailing_point )));
		document.getElementById("os_max_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_max_speed )));
		document.getElementById("os_upwind_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_upwind_speed )));
		document.getElementById("os_luffing_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_luffing_speed )));
		document.getElementById("os_close_haul_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_close_haul_speed )));
		document.getElementById("os_beam_reach_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_beam_reach_speed )));
		document.getElementById("os_broad_reach_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_broad_reach_speed )));
		document.getElementById("os_running_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].os_running_speed )));

		document.getElementById("battle_best_sailing_point_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_best_sailing_point )));
		document.getElementById("battle_max_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_max_speed )));
		document.getElementById("battle_acceleration_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_acceleration )));
		document.getElementById("battle_deceleration_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_deceleration )));
		document.getElementById("battle_turning_fast_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_turning_fast )));
		document.getElementById("battle_turning_slow_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_turning_slow )));
		document.getElementById("battle_turning_accelerating_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_turning_accelerating )));
		document.getElementById("battle_turning_decelerating_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_turning_decelerating )));

		document.getElementById("battle_upwind_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_upwind_speed )));
		document.getElementById("battle_luffing_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_luffing_speed )));
		document.getElementById("battle_close_haul_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_close_haul_speed )));
		document.getElementById("battle_beam_reach_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_beam_reach_speed )));
		document.getElementById("battle_broad_reach_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_broad_reach_speed )));
		document.getElementById("battle_running_speed_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].battle_running_speed )));

		document.getElementById("structure_integrity_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].structure_integrity )));
		document.getElementById("port_armour_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].port_armour )));
		document.getElementById("starboard_armour_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].starboard_armour )));
		document.getElementById("bow_armour_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_armour )));
		document.getElementById("stern_armour_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_armour )));
		document.getElementById("mast_integrity_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].mast_integrity )));

		document.getElementById("structure_dr_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].structure_dr )));
		document.getElementById("port_dr_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].port_dr )));
		document.getElementById("starboard_dr_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].starboard_dr )));
		document.getElementById("bow_dr_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_dr )));
		document.getElementById("stern_dr_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_dr )));
		document.getElementById("mast_dr_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].mast_dr )));

		document.getElementById("mast_offence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].mast_offence )));
		document.getElementById("mast_defence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].mast_defence )));
		document.getElementById("mast_resist_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].mast_resist )));

		document.getElementById("crew_offence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].crew_offence )));
		document.getElementById("crew_defence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].crew_defence )));
		document.getElementById("crew_resist_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].crew_resist )));

		document.getElementById("bow_offence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_offence )));
		document.getElementById("bow_defence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_defence )));
		document.getElementById("bow_resist_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_resist )));

		document.getElementById("stern_offence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_offence )));
		document.getElementById("stern_defence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_defence )));
		document.getElementById("stern_resist_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_resist )));

		document.getElementById("sides_offence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].sides_offence )));
		document.getElementById("sides_defence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].sides_defence )));
		document.getElementById("sides_resist_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].sides_resist )));

		document.getElementById("grappling_offence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].grappling_offence )));
		document.getElementById("grappling_defence_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].grappling_defence )));
		document.getElementById("grappling_resist_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].grappling_resist )));

		document.getElementById("broadside_total_guns_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_total_guns )));
		document.getElementById("broadside_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_weight )));
		document.getElementById("broadside_max_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_max_range )));
		document.getElementById("broadside_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_max_damage )));
		document.getElementById("broadside_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_damage_200 )));
		document.getElementById("broadside_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_dps_200 )));
		document.getElementById("broadside_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_damage_400 )));
		document.getElementById("broadside_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].broadside_dps_400 )));

		document.getElementById("top_deck_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].top_deck_guns_per_side );
		document.getElementById("top_deck_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_weight )));
		document.getElementById("top_deck_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_range )));
		document.getElementById("top_deck_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_damage_gun )));
		document.getElementById("top_deck_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_reload )));
		document.getElementById("top_deck_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_max_damage )));
		document.getElementById("top_deck_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_accuracy_200 )));
		document.getElementById("top_deck_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_damage_200 )));
		document.getElementById("top_deck_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_dps_200 )));
		document.getElementById("top_deck_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_accuracy_400 )));
		document.getElementById("top_deck_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_damage_400 )));
		document.getElementById("top_deck_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].top_deck_dps_400 )));

		document.getElementById("upper_deck_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].upper_deck_guns_per_side );
		document.getElementById("upper_deck_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_weight )));
		document.getElementById("upper_deck_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_range )));
		document.getElementById("upper_deck_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_damage_gun )));
		document.getElementById("upper_deck_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_reload )));
		document.getElementById("upper_deck_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_max_damage )));
		document.getElementById("upper_deck_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_accuracy_200 )));
		document.getElementById("upper_deck_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_damage_200 )));
		document.getElementById("upper_deck_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_dps_200 )));
		document.getElementById("upper_deck_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_accuracy_400 )));
		document.getElementById("upper_deck_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_damage_400 )));
		document.getElementById("upper_deck_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].upper_deck_dps_400 )));

		document.getElementById("middle_deck_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].middle_deck_guns_per_side );
		document.getElementById("middle_deck_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_weight )));
		document.getElementById("middle_deck_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_range )));
		document.getElementById("middle_deck_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_damage_gun )));
		document.getElementById("middle_deck_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_reload )));
		document.getElementById("middle_deck_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_max_damage )));
		document.getElementById("middle_deck_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_accuracy_200 )));
		document.getElementById("middle_deck_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_damage_200 )));
		document.getElementById("middle_deck_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_dps_200 )));
		document.getElementById("middle_deck_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_accuracy_400 )));
		document.getElementById("middle_deck_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_damage_400 )));
		document.getElementById("middle_deck_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].middle_deck_dps_400 )));

		document.getElementById("gun_deck_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].gun_deck_guns_per_side );
		document.getElementById("gun_deck_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_weight )));
		document.getElementById("gun_deck_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_range )));
		document.getElementById("gun_deck_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_damage_gun )));
		document.getElementById("gun_deck_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_reload )));
		document.getElementById("gun_deck_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_max_damage )));
		document.getElementById("gun_deck_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_accuracy_200 )));
		document.getElementById("gun_deck_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_damage_200 )));
		document.getElementById("gun_deck_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_dps_200 )));
		document.getElementById("gun_deck_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_accuracy_400 )));
		document.getElementById("gun_deck_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_damage_400 )));
		document.getElementById("gun_deck_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].gun_deck_dps_400 )));

		document.getElementById("bow_chasers_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].bow_chasers_guns_per_side );
		document.getElementById("bow_chasers_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_weight )));
		document.getElementById("bow_chasers_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_range )));
		document.getElementById("bow_chasers_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_damage_gun )));
		document.getElementById("bow_chasers_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_reload )));
		document.getElementById("bow_chasers_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_max_damage )));
		document.getElementById("bow_chasers_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_accuracy_200 )));
		document.getElementById("bow_chasers_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_damage_200 )));
		document.getElementById("bow_chasers_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_dps_200 )));
		document.getElementById("bow_chasers_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_accuracy_400 )));
		document.getElementById("bow_chasers_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_damage_400 )));
		document.getElementById("bow_chasers_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].bow_chasers_dps_400 )));

		document.getElementById("stern_chasers_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].stern_chasers_guns_per_side );
		document.getElementById("stern_chasers_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_weight )));
		document.getElementById("stern_chasers_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_range )));
		document.getElementById("stern_chasers_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_damage_gun )));
		document.getElementById("stern_chasers_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_reload )));
		document.getElementById("stern_chasers_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_max_damage )));
		document.getElementById("stern_chasers_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_accuracy_200 )));
		document.getElementById("stern_chasers_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_damage_200 )));
		document.getElementById("stern_chasers_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_dps_200 )));
		document.getElementById("stern_chasers_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_accuracy_400 )));
		document.getElementById("stern_chasers_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_damage_400 )));
		document.getElementById("stern_chasers_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].stern_chasers_dps_400 )));
		
		document.getElementById("swivel_guns_guns_per_side_a").innerHTML = ( shipdata[ ShipID ].swivel_guns_guns_per_side );
		document.getElementById("swivel_guns_weight_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_guns_weight )));
		document.getElementById("swivel_guns_range_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_guns_range )));
		document.getElementById("swivel_guns_damage_gun_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_guns_damage_gun )));
		document.getElementById("swivel_guns_reload_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_guns_reload )));
		document.getElementById("swivel_guns_max_damage_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_guns_max_damage )));
		document.getElementById("swivel_accuracy_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_accuracy_200 )));
		document.getElementById("swivel_damage_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_damage_200 )));
		document.getElementById("swivel_dps_200_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_dps_200 )));
		document.getElementById("swivel_accuracy_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_accuracy_400 )));
		document.getElementById("swivel_damage_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_damage_400 )));
		document.getElementById("swivel_dps_400_a").innerHTML = (new Intl.NumberFormat(localeselect).format(( shipdata[ ShipID ].swivel_dps_400 )));

		document.getElementById("last_updated_a").innerHTML = ( shipdata[ ShipID ].last_updated );

		highlight();

});

};
console.log('ert')
var testdrop = 'testdropcall';
BuildDropdowns(testdrop);
